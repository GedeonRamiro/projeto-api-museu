

interface IProps {
    title: string
    image: string
    century: string
    division: string
    department: string
}



const ObjectItem: React.FC<IProps> = ({ title, image, century, division, department }) => {
    return (
        <>
        <div className='container mx-auto'>
            <div className='w-full border'></div>
            <div className='mx-4 my-20 lg:mx-0 lg:flex'>
                <div>
                    <img className='bg-cover lg:w-60 rounded-xl' src={`${image}`} alt={title}/>
                </div>
                <div className='pt-4 lg:pt-0 lg:mx-10'>
                    <p className='text-xl font-bold'>{department}</p>
                    <h3 className='py-2 text-xl'>{title}</h3>
                    <p className='py-2 text-lg'>{division}</p>
                    <p className='font-semibold text-md'>{century}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ObjectItem