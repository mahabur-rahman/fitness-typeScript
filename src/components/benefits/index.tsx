import { BenefitType } from '@/shared/types'
import {FaAccusoft, FaAdn, FaAlipay} from 'react-icons/fa'

const benefits: Array<BenefitType> = [
  {
    icons: <FaAdn className="text-red-500" />,
    title : 'some',
    desc: 'desc 1'
  },

  {
    icons: <FaAccusoft />,
    title : 'title 2',
    desc: 'desc 2'
  },

  {
    icons: <FaAlipay />,
    title : 'title 3',
    desc: 'desc 3'
  }
]


const Benefits = () => {
  return (
    <div>
  <h2>This is Benefits</h2>

  {benefits.map((benefit: BenefitType) =>{
    return (
      <div key={benefit.title}>
        <h4>{benefit.title}</h4>
        <p>{benefit.icons}</p>
        <p>{benefit.desc}</p>
        <hr />
      </div>
    )
  })}

    </div>
  )
}

export default Benefits
