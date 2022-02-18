import Link from 'next/link'
import {useSelector, shallowEqual} from 'react-redux'
import {CircularBadge} from '../badges'
import Title from './title'
import * as Icon from 'react-feather'

const AccountLinks = () => {
  const items = [
    
  ]

  const {leftSidebar} = useSelector(
    state => ({
      leftSidebar: state.leftSidebar
    }),
    shallowEqual
  )
  const {showAccountLinks} = {...leftSidebar}
  if (!showAccountLinks) return null
  return (
    <div className="flex flex-col w-full">
      <Title>contaaaa</Title>
      <ul className="list-none px-4">
        {items.map((item, i) => (
          <li className="relative" key={i}>
            <Link href={item.url}>
              <a className="list-item children-x-2">
                {item.icon}
                <span>{item.name}</span>
                {item.badge && (
                  <CircularBadge size="sm" color={item.badgeColor}>
                    {item.badgeNumber}
                  </CircularBadge>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AccountLinks
