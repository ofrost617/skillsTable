const newCandidates = [
  { name: 'Kerrie', skills: ['JavaScript', 'Docker', 'Ruby'] },
  { name: 'Mario', skills: ['Python', 'AWS'] },
  { name: 'Jacquline', skills: ['JavaScript', 'Azure'] },
  { name: 'Kathy', skills: ['JavaScript', 'Java'] },
  { name: 'Anna', skills: ['JavaScript', 'AWS'] },
  { name: 'Matt', skills: ['PHP', 'AWS'] },
  { name: 'Matt', skills: ['PHP', '.Net', 'Docker'] },
];

function removeRowsFromTable(table) {
  const rows = table.getElementsByTagName('tr');

  while (rows.length > 1) {
    table.deleteRow(1);
  }
}

function insertCandidate(tbody, name, skills) {
  const newRow = tbody.insertRow();
  const nameCell = newRow.insertCell();
  const skillCell = newRow.insertCell();

  const candidateName = document.createTextNode(name);
  const candidateSkills = document.createTextNode(skills.join(', '));

  nameCell.appendChild(candidateName);
  skillCell.appendChild(candidateSkills);
}

function addCandidatesToTable(table, candidates) {
  candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
}

function hasSkill(candidate, skill) {
  return candidate.skills.includes(skill);
}

function filterCandidateBySkill(candidates, skill) {
  const selectedCandidates = [];

  candidates.forEach((candidate) => {
    if (hasSkill(candidate, skill)) {
      selectedCandidates.push(candidate);
    }
  });

  return selectedCandidates;
}

function tableExists() {
  return !!document.getElementById('filteredTable');
}

function removeExistingTable() {
  if (tableExists()) {
    document.getElementById('filteredTable').remove();
  } else {
    return 'Cant remove table';
  }
}

function cloneExistingTable() {
  const candidatesTable = document.getElementById('candidates_example');
  const newCandidatesTable = candidatesTable.cloneNode(true);
  newCandidatesTable.id = 'filteredTable';

  return newCandidatesTable;
}

function addFilteredCandidateRows(candidates, skill, table) {
  const newTbody = table.getElementsByTagName('tbody')[0];
  const filteredCandidates = filterCandidateBySkill(candidates, skill);
  addCandidatesToTable(newTbody, filteredCandidates);
}

function renderFilteredTable(candidates, skill) {
  const newTable = cloneExistingTable();
  removeRowsFromTable(newTable);
  addFilteredCandidateRows(candidates, skill, newTable);
  document.body.appendChild(newTable);
}

const skillList = document.getElementById('list');
skillList.addEventListener('change', () => {
  removeExistingTable();
  const selectedSkill = skillList.options[skillList.selectedIndex].value;
  renderFilteredTable(newCandidates, selectedSkill);
});
