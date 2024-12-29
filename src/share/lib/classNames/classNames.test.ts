import { classNames } from './classNames'


describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('test')).toBe('test');
  })
  test('with additional class', () => {
    const result = 'test class1 class2'
    expect(classNames('test', {}, ['class1', 'class2'])).toBe(result);
  })
  test('with mods true', () => {
    const result = 'test hovered scroll'
    expect(classNames('test', {hovered: true, scroll: true})).toBe(result);
  })
  test('with mods false/true', () => {
    const result = 'test hovered'
    expect(classNames('test', {hovered: true, scroll: false})).toBe(result);
  })
  test('with mods true/undefined', () => {
    const result = 'test hovered'
    expect(classNames('test', {hovered: true, scroll: undefined})).toBe(result);
  })
})