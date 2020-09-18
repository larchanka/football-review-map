const getName = (num, squad) => {
  const foundPlayer = squad.find(i => {
    return i.num === num;
  });

  if (!foundPlayer) return 'Unknown';

  return foundPlayer.name;
}

const getSotedData = (squad, fileData) => {
  if (!squad || !fileData) {
    throw new Error('No data provided');
  }

  const soprtedSquad = squad.split('\n')
    .filter(i => !!i)
    .map(i => i
      .split(/(([\wö-]{1,})(\s[\wö-]{1,})?(\s[\wö-]{1,})?(\s[\wö-]{1,})?)\s((\d){1,3})/)
      .filter((i, idx) => (!!i && [1, 6].indexOf(idx) > -1)))
    .map(i => ({
      name: i[0],
      num: Number(i[1]),
    }));

  return fileData
    .split('\n').filter(i => !!i)
    .map((i, idx) => {
      switch (idx) {
        case 2: {
          return i.split(' ').map(i_ => ({
            num: Number(i_),
            name: getName(Number(i_), soprtedSquad),
          }));
        }
        case 3: {
          return i.split(' ').map(i_ => ({
            num: Number(i_),
            name: getName(Number(i_), soprtedSquad),
          }));
        }
        case 4: {
          return i.split(' ').map(i_ => ({
            num: Number(i_),
            name: getName(Number(i_), soprtedSquad),
          }));
        }
        case 5: {
          return i.split(' ').map(i_ => ({
            num: Number(i_),
            name: getName(Number(i_), soprtedSquad),
          }));
        }
        case 6: {
          return i.split(' ').map(i_ => ({
            num: Number(i_),
            name: getName(Number(i_), soprtedSquad),
          }));
        }
        case 7: {
          return i.split(' ').map(i_ => ({
            num: Number(i_),
            name: getName(Number(i_), soprtedSquad),
          }));
        }
        case 8: {
          return i.split(' ').map(i_ => ({
            num: Number(i_),
            name: getName(Number(i_), soprtedSquad),
          }));
        }
        default:
          return i;
      }
    });
};

const drawPlayers = (playersData) => {
  const containerElement = document.getElementById('container');
  const players = playersData.slice(2);

  const html = `
    ${players.map(playersRow => (
    `<div class="playersRow">${playersRow.map(player => (
      `<div class="player"><div class="playerNum">${player.num}</div>
      <div class="playerName" style="border-left: .3rem solid ${playersData[1]}">${player.name}</div></div>`))
      .join('')}
        </div>`))
      .join('')}`;

  containerElement.innerHTML = html;
};

const loadFiles = (squadFilePath, teamFilePath) => {
  const squadRequest = fetch(squadFilePath).then(resp => resp.text());
  const teamRequest = fetch(teamFilePath).then(resp => resp.text());

  return Promise.all([squadRequest, teamRequest])
    .then(([squad, team]) => {
      return getSotedData(squad, team);
    });
}
