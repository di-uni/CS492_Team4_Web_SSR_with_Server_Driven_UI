import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

function addblogfan() {
  // const [login, setloggedin] = useState('false');
  var answer = window.confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?");
  if (answer) {
    window.location.href = "https://nid.naver.com/nidlogin.login?svctype=262144&url=https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnexearch%26sm%3Dtop_hty%26fbm%3D1%26ie%3Dutf8%26query%3D%25EB%25B6%2588%25EA%25B5%25AD%25EC%2582%25AC"
      // if (login) {
      //   console.log('찜하기 기능 실행')
      // }
      // else {window.location.href = "https://nid.naver.com/nidlogin.login?svctype=262144&url=https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnexearch%26sm%3Dtop_hty%26fbm%3D1%26ie%3Dutf8%26query%3D%25EB%25B6%2588%25EA%25B5%25AD%25EC%2582%25AC";
      // }
}
  else {}
}

function influencer_icon(){
  console.log('clicked')
  const togglePopup = () => {
    setShowPopup(!showPopup)
  };
}

const dummydata = {
          "influencer": [
            {
              "name": "쏠트몬",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬1",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬2",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬3",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬4",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            }
            ]}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));

const Search = () => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)
  return (
    <div>
      <div onClick={onClick} > 인플루엔서 </div>
      { showResults ? <Results /> : null }
    </div>
  )
}

const Results = () => (
  <Card sx={{ maxWidth: 1150, lineHeight: "109px"}}>
    Some Results in this section
  </Card>
)

export default function Home() {
  const [showResults, setShowResults] = useState(false)
  return (
    <Container>
      <Search/>
      <Card sx={{ maxWidth: 1150, lineHeight: "109px"}}>
       <Container sx={{ display: 'flex' }}>
          <Container sx={{ fontSize: '1.6rem', fontWeight : "700", display: 'flex'}}> <div>인플루언서 </div> <img onClick = {influencer_icon} className = "influencer_icon" src="/static/images/avatar/icon_img.png"/> </Container>
          <Container sx={{ color: "#0c43b7", fontSize: '1.3rem' }} className = "content-title_rightend"> <Link href = "https://in.naver.com/"> 서비스 홈 바로가기 </Link> </Container>
        </Container>
      </Card>
      {dummydata['influencer'].map((each) => 
      <Card sx={{ maxWidth: 1150, my: '10px'}} key = {each.name}>
        <Container sx={{ display: 'flex' }}>
          <CardHeader
          avatar={
            <Link href={each.avatar_name_url}> 
            <Avatar sx = {{ width: 88, height: 88, display:'inline-block'}} alt="" src="/static/images/avatar/avatar_1.png"/>
            </Link>
          }
          title= {<div> <Link href={each.avatar_name_url} underline="none"> <ui className = 'title'>{each.name}</ui> </Link> <ui className = 'header'>{each.fans}</ui> </div> }
          subheader= {<div className = 'magintop'> <ui className = 'header'>{each.type}</ui> <ui className = 'header'>{each.place}</ui> </div>}
          />
          <div className = 'right'> <img onClick = {addblogfan} className = "fanicon" src="/static/images/avatar/fanicon.png"/> </div>
        </Container>
        <Container sx={{ml:'40px' }}> <img className = "blogicon" src="/static/images/avatar/blogicon.png"/> <ui className = 'subheader'> {each.blogdetails} </ui> <ui className = 'detailsdepth'> {each.detailsdepth} </ui> </Container>
        <Link href={each.title_content_url} underline="none"> <Container sx={{my: '10px', color: '#0c43b7', fontSize: '1.6rem', ml:'40px' }} className = 'content-title'> {each.title} </Container> </Link>  
  
        <Container sx={{ display: 'flex' }}>
          <Container>
            <Link href={each.title_content_url} underline="none"> <Container sx={{my: '10px', color: "#404040", fontSize: '1.3rem' }}> {each.content} </Container> </Link>
            <Container sx={{my: '10px', color: 'grey', fontSize: '1.1rem' }}> {each.date} </Container>
          </Container>
          <Link href={each.title_content_url} underline="none"> <img className = 'image'  src="/static/images/avatar/blog_1.png"/> </Link>
        </Container>
      </Card>)}
    </Container>
  )
}