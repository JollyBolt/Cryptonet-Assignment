import { Tilt } from 'react-tilt'

const Card1 = ({ userData, loading }) => {
    return (
        <Tilt
        >
            <div className=''>
                {
                    loading
                        ? <div>Loading</div>
                        : <div className='border-2 border-white py-5 gap-5 flex flex-row  rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 text-white px-7 shadow-lg'>

                            <div>
                                <img src={userData?.picture.large} alt="profile_pic" className='rounded-full border-2 border-white' />
                            </div>
                            <div className='flex flex-col justify-between text-xl'>
                                <div className='flex flex-row gap-4'>
                                    <p className='font-light'>First Name:
                                        <span className='font-semibold'> {userData?.name.first}</span>
                                    </p>
                                    <p className='font-light'>Last Name:
                                        <span className='font-semibold'> {userData?.name.last}</span>
                                    </p>
                                </div>
                                <p className='font-light'>Gender: <span className='capitalize font-semibold'>{userData?.gender}</span></p>
                                <p className='font-light'>Age: <span className='font-semibold'>{userData?.dob.age}</span></p>
                                <p className='font-light'>Phone Number: <span className='font-semibold'>{userData?.cell}</span></p>
                            </div>
                        </div>
                }
            </div>
        </Tilt>
    )
}

export default Card1