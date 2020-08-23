import { getContrastTextColor, getRGB, KnownColors } from "./color"

describe("computed color", () => {
  test("hex", () => {
    const c = "#0000FF"
    const want = { r: 0, g: 0, b: 255 }
    expect(getRGB(c)).toEqual(want)
  })

  test("hex short", () => {
    const c = "#0F0"
    const want = { r: 0, g: 255, b: 0 }
    expect(getRGB(c)).toEqual(want)
  })

  test("name", () => {
    const c = "red"
    const want = { r: 255, g: 0, b: 0 }
    expect(getRGB(c)).toEqual(want)
  })

  test("rgba", () => {
    const c = "rgba(74,74,74,1)"
    const want = { r: 74, g: 74, b: 74 }
    expect(getRGB(c)).toEqual(want)
  })

  test("invalid", () => {
    const c = "redo"
    const want = null
    expect(getRGB(c)).toEqual(want)
  })
})

describe("contrast text color", () => {
  const black = KnownColors["black"]
  const white = KnownColors["white"]
  test("white", () => {
    const c = { r: 255, g: 255, b: 255 }
    expect(getContrastTextColor(c)).toEqual(black)
  })

  test("black", () => {
    const c = { r: 0, g: 0, b: 0 }
    expect(getContrastTextColor(c)).toEqual(white)
  })

  test("red", () => {
    const c = { r: 255, g: 0, b: 0 }
    expect(getContrastTextColor(c)).toEqual(white)
  })

  test("pink", () => {
    const c = { r: 200, g: 200, b: 200 }
    expect(getContrastTextColor(c)).toEqual(black)
  })

  test("color name with custom threshold", () => {
    const c = "orange"
    expect(getContrastTextColor(c, 180)).toEqual(white)
  })

  test("invalid name", () => {
    const c = "blar"
    expect(getContrastTextColor(c)).toEqual(black)
  })
})