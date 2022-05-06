import React from 'react';
import api from '../../../services/service'
import { useParams } from 'react-router-dom';
import { CircularProgress, Container } from "@mui/material";
import { Box } from '@mui/system';


export default function NewsDetail() {
    console.log(React.useState(100));
    const params = useParams();
    console.log(params);
    const newsId = params.id


    const [news, setNews] = React.useState(null)

    React.useEffect(() => {
        const getNewsById = async () => {
            const { data } = await api.client.get_news_byId(newsId)
            console.log(data);
            // setNews(data)


        }
        getNewsById()
    }, [])

    if (!news) return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />

        </Box>
    )

    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    let createDate = new Date(Date.parse(news.date)).toLocaleString('ru', options)


    return (
        <div>
            <Container maxWidth='md'>
                <div className="news__deatil">
                    <div className='news__wrap'>
                        <img className={'news__img'} src={news?.img} alt=" " />
                    </div>
                    <div className="news__content">
                        {news && <>
                            <div className={'news__title'}>
                                <h4>{news.title}</h4>
                            </div>
                            <div className={'news__body'}>
                                <p className={'news_p'}>{news.body}</p>
                            </div>
                            <div className={'news__btn'}>
                                <p><b>Дата:</b><span>{createDate}</span></p>
                                <button>Назад</button>

                            </div>
                        </>}

                    </div>

                </div>

            </Container>
        </div>
    )
}