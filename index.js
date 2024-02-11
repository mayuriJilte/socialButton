const Button = props => {
  //  Write your code here.
  const {name, className} = props
  return <button className={className}>{name}</button>
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='main-heading'>Social Buttons</h1>
    <div className='social-buttons'>
      <Button name='Like' className='btn btn1' />
      <Button name='Comment' className='btn btn2' />
      <Button name='Share' className='btn btn3' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
