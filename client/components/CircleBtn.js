
import './CircleBtn.css'

const CircleBtn = ({title}) => {
    return (
        <div className='text-sm flex gap-5 mt-4 circle-btn-parent items-center'  >
            <span  className='text-secondary font-bold '>{title}</span>
            <span className='Icon-linK'>
                <span className='LinE'></span>
                <span className='CirclE'></span>
                <span className='DoT'></span>
            </span>
        </div>

    )
}

export default CircleBtn