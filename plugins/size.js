export default (context, inject) => {
  const size = (node) => {
    const computedStyle = window.getComputedStyle(node)

    let width = node.clientWidth // width with padding
    let height = node.clientHeight // height with padding

    height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)
    width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)

    return { height, width }
  }

  inject('size', size)

  context.$size = size
}
