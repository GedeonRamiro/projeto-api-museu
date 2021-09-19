import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import api, {API_KEY} from '../../services/api'
import Header from '../../components/Header'

interface IInfo {
    date: string,
    renditionnumber: string
    baseimageurl: string
    copyright: string
    imageid: number
}

interface IMuseum {
    id: number,
    images: IInfo[]
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

interface IParams {
    object: string;
}


const Gallery: React.FC = () => {

  const { object: idParams } = useParams<IParams>()

  const resource = 'object'

  const [museums ,setMuseums] = useState<IMuseum[]>([])

  const getMuseum = async () => {
    const {data} = await api.get<IResponse>(`${resource}${API_KEY}`)
    return setMuseums(data.records)
  }
   
  
  useEffect(() => {
    getMuseum()
  }, [])


   const imageArry = museums.filter(item => item.id === Number(idParams))
                         .map(img => img.images).flat(1)
                  

    return (        
        <>
        <Header />
            { imageArry.length > 0 ?
             (imageArry.map(data => (
              <div key={data.imageid} className='container mx-auto'>
                  <div className='w-full border'></div>
                  <div className='mx-4 my-20 lg:mx-0 lg:flex'>
                    <div>
                        <img className='bg-cover w-96 rounded-xl' src={data.baseimageurl} alt={data.copyright}/>
                    </div>
                    <div className='pt-4 lg:pt-0 lg:mx-10'>
                        <p className='text-xl font-bold'>Date: {data.date}</p>
                        <p className='py-2 text-xl'>Renditionnumber: {data.renditionnumber}</p>
                        <p className='py-2 text-lg'>Copyright: {data.copyright}</p>
                    </div>                  
                  </div>
              </div>
                
             ))) :
             <div>
                 <h4 className=" animate-ping flex justify-center items-center text-xl font-bold">Loading...</h4>
              </div>    
        
            }
           <Link to='/'>
              <div className='pt-20 pb-20 text-center'>
                  <button className='px-10 py-2 font-semibold text-white bg-black rounded'>Back</button>
              </div>
           </Link>
           
        </>
      
    )
}

export default Gallery