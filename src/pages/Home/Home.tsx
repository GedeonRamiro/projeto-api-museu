import React, { useEffect, useState } from 'react';
import api, {API_KEY} from '../../services/api'
import ObjectItem from '../../components/ObjectItem'
import { Link } from 'react-router-dom'

  interface IMuseum {
    id: number
    title: string
    primaryimageurl: string
    images: {}[]
} 
 
interface IResponse {
  info: {
    "totalrecordsperquery": number,
    "totalrecords":number,
    "pages":number,
    "page": number,
    "next": string | null
 },
 records: IMuseum[]
}


const Home:React.FC = () => {

  const resource = 'object'

  const [museums ,setMuseums] = useState<IMuseum[]>([])
  const getMuseum = async () => {
    const {data} = await api.get<IResponse>(`${resource}${API_KEY}`)
    return setMuseums(data.records)
  }
  
  
  useEffect(() => {
    getMuseum()
  }, [])
  
  const image = museums.map(img => img.images)
  console.log(image)
  
  return (
    <div>
      { museums.length > 0 ?
        (museums.map(museum =>(
         <Link to={`${museum.id}`}  key={museum.id} >
             <ObjectItem 
              title={museum.title}
              image={museum.primaryimageurl}
            />
         </Link> 
          ) 
        )) : 
        <p>Carregando...</p>
      }
    </div>
  );
}

export default Home;