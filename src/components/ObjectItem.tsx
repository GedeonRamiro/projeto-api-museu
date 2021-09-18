import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

interface IProps {
    title: string
    image: string
}



const ObjectItem: React.FC<IProps> = ({ title, image }) => {
    return (
        <div>
            <img className='w-96 bg-cover rounded-xl' src={image}/>
            <h3 className='bg-gray-300'>{title}</h3>
            <button>teste</button>
        </div>
    )
}

export default ObjectItem