import { Container } from "@mui/material";
import * as React from "react";
import { useParams, useLocation } from "react-router-dom";
import api from "../../../services/service";
import imgNews from "../../../assets/img/bg-header.png";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";


export default function NewsDetail() {
  const params = useParams();
  const newsId = params.id

  const [news, setNews] = React.useState(null);

  React.useEffect(() => {
    const getNewsById = async () => {
      try {
        const { data } = await api.client.get_news_byId(newsId)
        console.log(data, 'data')
        setNews(data)
      } catch (e) {
        console.error(e.message)
      }
    }
    getNewsById()
  }, [newsId])

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
  console.log(createDate);
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
