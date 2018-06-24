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


  it('displays candidates', () => {
    expect(filterCandidateBySkill(candidates, 'JavaScript')).toEqual([
      { name: 'Kerrie', skills: ['JavaScript', 'Docker', 'Ruby'] },
      { name: 'Jacquline', skills: ['JavaScript', 'Azure'] },
      { name: 'Kathy', skills: ['JavaScript', 'Java'] },
      { name: 'Anna', skills: ['JavaScript', 'AWS'] },
    ]);
  })

})
