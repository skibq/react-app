import React from 'react'


class Header extends React.Component {
  render() {
    const title = 'Budget Palanning App'
    const description = 'Its just little description or maybe placeholder for menu'
    return (
      <header className={'header'}>
        <h1 className={'header__h1'}>{title}</h1>
        <h2 className={'header__h2'}>{description}</h2>
      </header>
    )
  }
}




export default Header