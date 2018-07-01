describe('Index', () => {
  const candidates = [
    { name: 'Kerrie', skills: ['JavaScript', 'Docker', 'Ruby'] },
    { name: 'Mario', skills: ['Python', 'AWS'] },
    { name: 'Jacquline', skills: ['JavaScript', 'Azure'] },
    { name: 'Kathy', skills: ['JavaScript', 'Java'] },
    { name: 'Anna', skills: ['JavaScript', 'AWS'] },
    { name: 'Matt', skills: ['PHP', 'AWS'] },
    { name: 'Matt', skills: ['PHP', '.Net', 'Docker'] },
  ];

  it('can check if a candidate has a skill', () => {
    expect(hasSkill(candidates[0], 'JavaScript')).toEqual(true)
  });

  it('displays JavaScript candidates', () => {
    expect(filterCandidateBySkill(candidates, 'JavaScript')).toEqual([
      { name: 'Kerrie', skills: ['JavaScript', 'Docker', 'Ruby'] },
      { name: 'Jacquline', skills: ['JavaScript', 'Azure'] },
      { name: 'Kathy', skills: ['JavaScript', 'Java'] },
      { name: 'Anna', skills: ['JavaScript', 'AWS'] },
    ]);
  });

  it('displays Docker candidates', () => {
    expect(filterCandidateBySkill(candidates, 'Docker')).toEqual([
      { name: 'Kerrie', skills: ['JavaScript', 'Docker', 'Ruby'] },
      { name: 'Matt', skills: ['PHP', '.Net', 'Docker'] },
    ]);
  });

  it('returns an empty array when there are no candidates with those skills', () => {
    expect(filterCandidateBySkill(candidates, 'React')).toEqual([]);
  });

  it('checks if a table exists on the webpage', () => {
    const dummyElement = document.createElement('table');
    dummyElement.id = 'filteredTable';

    spyOn(document, 'getElementById').and.returnValue(dummyElement);
    expect(tableExists()).toBe(true);
  });

  it('checks if a table doesnt exists on the webpage', () => {
    const dummyElement = document.createElement('table');
    dummyElement.id = 'notTable';
    expect(tableExists()).toBe(false);
  });

  describe('removeExistingTable', () => {
    it('will remove an existing table', () => {
      const filteredTable = document.createElement('table');
      filteredTable.id = 'filteredTable';
      spyOn(filteredTable, 'remove');
      spyOn(document, 'getElementById').and.returnValue(filteredTable);
      removeExistingTable();
      expect(filteredTable.remove).toHaveBeenCalled();
    });
  });

  describe('cloneExistingTable', () => {
    beforeEach(() => {
      const dummyElement = document.createElement('table');
      dummyElement.id = 'candidates_example';
      spyOn(document, 'getElementById').and.returnValue(dummyElement);
    });

    it('returns a clone of a table', () => {  
      expect(cloneExistingTable().nodeName).toEqual('TABLE');
    });

    it("changes the cloned table id to 'filteredTable'", () => {
      expect(cloneExistingTable().id).toEqual('filteredTable');
    });
  });

  describe('generateFilteredTBody', () => {
    let tableBody;

    beforeEach(() => {
      const table = document.createElement('table');
      tableBody = document.createElement('tbody');
      table.appendChild(tableBody);
      generateFilteredTBody(candidates, 'Ruby', table);
    });
    
    it('adds candidates to a tbody', () => {
      expect(tableBody.innerHTML).toContain('Kerrie');
    });

    it('does not add candidates without chosen skill', () => {
      expect(tableBody.innerHTML).not.toContain('Mario  ');
    });
  });

  describe('renderFilteredTable', () => {
    it('calls document.body.appendChild with correct args', () => {
      const dummyTable = document.createElement('table');
      const dummyTBody = document.createElement('tbody');
      dummyTable.appendChild(dummyTBody);
      dummyTable.id = 'candidates_example';

      spyOn(document, 'getElementById').and.returnValue(dummyTable);
      spyOn(document.body, 'appendChild');
      renderFilteredTable(candidates, 'Ruby');
      console.log(document.body.appendChild.calls.mostRecent().args[0].innerHTML);
      expect(
        document.body.appendChild.calls.mostRecent().args[0].innerHTML
      ).toContain('Kerrie');
    });
  });
});
