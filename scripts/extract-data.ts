const fs = require('fs/promises');

async function readFile(): Promise<string[]> {
    const data = await fs.readFile(
      './List Formatted.txt',
      {
        encoding: 'utf-8'
      }
    )
    return data.split('\n')
}

readFile().then((data) => {
  console.log(`Read a file with ${data.length} lines.`);

  console.log('Cleaning data..');
  let dataWithoutWhiteSpace = data.map(line => line.replace(/[\r\n\t]/g, ""))
    .filter(line => !!line)

  console.log(`${dataWithoutWhiteSpace.length} lines after cleaning.`);

  const splitData = dataWithoutWhiteSpace.map(line => line.split(/(\([\w\W]*\))/gi))
  const splitData1 = splitData.map(array => array.map(item => item.trim()));

  const titles = splitData1.map(line => line[0]);

  console.log(titles);

  const media = titles.map(title => ({
    title,
    type: 'unknown',
    status: 'Finished',
    release: undefined,
  }))

  return fs.writeFile('./media.json', JSON.stringify(media, null,  2))
}).then()