export default {
  bind(el,binding){
    // console.log('bind')
    // console.log('el',el) //当前元素
    // console.log('binding',binding) //参数等信息
    const _ops = binding.value
    const doms = el.getElementsByClassName(_ops.className)
    doms[_ops.currentIndex].classList.add(_ops.activeName)

  },
  update(el,binding){
    // console.log('update')
    // console.log('el',el)
    // console.log('binding',binding)
    const _ops = binding.value
    const _OldOps=binding.oldValue
    const doms = el.getElementsByClassName(_ops.className)
    doms[_ops.currentIndex].classList.add(_ops.activeName)
    _OldOps.currentIndex !== _ops.currentIndex && doms[_OldOps.currentIndex].classList.remove(_ops.activeName)
  }
}
