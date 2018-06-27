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

    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    expect(tableExists()).toBe(true);
  });

  // it('checks if a table doesnt exists on the webpage', () => {
  //   const dummyElement = document.createElement('table');
  //   dummyElement.id = 'notTable';
  //   expect(tableExists()).toBe(false);
  // });

  // it('can remove an existing table from the webpage', () => {
  //   const dummyElement = document.createElement('table');
  //   dummyElement.id = 'filteredTable';

  //   document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
  //   removeExistingTable();
  //   expect(tableExists()).toBe(false);
  // });

  // it('can clone a table', () => {
  //   const dummyCandidatesTable = document.createElement('table');
  //   dummyCandidatesTable.id = 'candidates_example';
  //   document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyCandidatesTable);
  //   cloneExistingTable();    
  //   expect(newCandidatesTable.id.toEqual('filteredTable'));
  // });
});
