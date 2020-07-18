function summer(a,b) {
    return a+b;
}
it('making test', () => {
    const sum = summer(3,4);
    expect(sum).toBe(7);
    expect(process.env.FOO).toBe('bats')
})