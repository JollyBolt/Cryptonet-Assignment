import { Tilt } from 'react-tilt'

const Card2 = ({ userData, loading }) => {
    return (
        <Tilt
        >
            <div className=''>
                {
                    loading
                        ? <div>Loading</div>
                        : <div className='border-2 border-white py-5 px-6 gap-5 flex flex-col  bg-gradient-to-b from-slate-900 to-slate-700 text-white rounded-lg  shadow-lg w-[340px]'>
                            <div className='mx-auto'>
                                <img src={userData?.picture.large} alt="profile_pic" className='rounded-full border-white border-2' />
                            </div>
                            <div className='flex flex-col justify-between text-lg'>
                                <div className='flex justify-between'>
                                    <span className='font-light'>First Name: </span>
                                    <span className='font-semibold'> {userData?.name.first}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='font-light'>Last Name: </span>
                                    <span className='font-semibold'> {userData?.name.last}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='font-light'>Gender: </span>
                                    <span className='capitalize font-semibold'>{userData?.gender}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='font-light'>Age: </span>
                                    <span className='font-semibold'>{userData?.dob.age}</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='font-light'>Phone Number: </span>
                                    <span className='font-semibold text-lg'>{userData?.cell}</span>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </Tilt>
    )
}

export default Card2