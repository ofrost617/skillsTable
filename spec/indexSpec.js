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

});
