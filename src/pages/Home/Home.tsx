import React, { useEffect, useState } from 'react';
import api, {API_KEY} from '../../services/api'
import ObjectItem from '../../components/ObjectItem'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';



  interface IMuseum {
    id: number
    title: string
    primaryimageurl: string
    century:string
    division: string
    department: string
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
  
  
  return (
    <div>
        <Header />
      { museums.length > 0 ?
        (museums.map(museum =>(
         <Link to={`${museum.id}`}  key={museum.id} >
             <ObjectItem 
              title={museum.title}
              image={museum.primaryimageurl}
              century={museum.century}
              division={museum.division}
              department={museum.department}
            />
         </Link> 
          ) 
        )) : 
          <div>
             <h4 className=" animate-ping flex justify-center items-center text-xl font-bold">Loading...</h4>
          </div>
      }
    </div>
  );
}

export default Home;