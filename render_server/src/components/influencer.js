import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import styles from './influencer.module.css'

function addblogfan() {
  var answer = window.confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?");
  if (answer) {
    window.location.href = "https://nid.naver.com/nidlogin.login?svctype=262144&url=https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnexearch%26sm%3Dtop_hty%26fbm%3D1%26ie%3Dutf8%26query%3D%25EB%25B6%2588%25EA%25B5%25AD%25EC%2582%25AC"
}
  else {}
}

const Blogfan = () => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)
  return (
    <div>
      { showResults ? 
      <div onClick={onClick} > <img className = {styles.fanicon} src="/images/influencer/unfan.png"/>  </div> 
      : <div onClick={onClick} > <img className = {styles.fanicon} src="/images/influencer/fanicon.png"/>  </div>}
    </div>
  )
}

function influencer_icon(){
  console.log('clicked')
  const togglePopup = () => {
    setShowPopup(!showPopup)
  };
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));

const Search = (props) => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)
  return (
    <div>
      { showResults ? 
      <div className = {styles.rightallign} onClick={onClick} > <img className = {styles.influencer_icon} src="/images/influencer/after.png"/>  </div> 
      : <div className = {styles.rightallign} onClick={onClick} > <img className = {styles.influencer_icon} src="/images/influencer/before.png"/>  </div>}
      { showResults ? <Results props={props}/> : null }
    </div>
  )
}

const Results = (props) => {
  return (
    <Card sx={{ width: 700, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "40px", mr: "40px", mb: "30px" }}>
      <Card sx={{ width: 680, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "10px", mr: "10px", fontSize: '0.8rem' }}>
        <div className = {styles.typ_grey}> 여행 스타일:   <div className = {styles.typ_black}>{props.props.props[0]}</div> </div>
        <div className = {styles.typ_grey}> 창작 분야:     <div className = {styles.typ_black}>{props.props.props[1]}</div></div>
      </Card>
      <div className = {styles.flipscreen}> 자세히 보기
      </div>
    </Card>
  )
}

export default function Influencer(props) {
  const [showResults, setShowResults] = useState(false)
  const { data } = props.props
  return (
    <Container>
      <Search/>
      <Card sx={{ maxWidth: 1150, lineHeight: "109px"}}>
       <Container sx={{ display: 'flex' }}>

          <Container sx={{ fontSize: '1rem', fontWeight : "700", display: 'flex'}}> 
          <div>인플루언서 </div> 
          <img onClick = {influencer_icon} className = {styles.influencer_icon} src="/static/images/avatar/icon_img.png"/> 
          </Container>

          <Container sx={{ color: "#0c43b7", fontSize: '1rem' }} className = {styles.contenttitle_rightend}> 
          <Link href = "https://in.naver.com/"> 서비스 홈 바로가기 </Link> 
          </Container>

        </Container>
      </Card>

      {data.map((each) => 
      <Card sx={{ maxWidth: 768, my: '10px'}} key = {each.name}>
        <Container sx={{ maxWidth: 768, display: 'flex' }}>
          <CardHeader
          avatar={
            <Link href={each.avatar_name_url}> 
            <Avatar sx = {{ width: 88, height: 88, display:'inline-block'}} alt="" src="../static/images/avatar/avatar_1.png"/>
            </Link>
          }
          title = {<div className = {styles.flex}> <Link href={each.avatar_name_url} underline="none"> 
          <div className = {styles.title}>{each.name}</div> 
          </Link> <div className = {styles.header}>{each.fans}</div> </div> }
          
          subheader= {<div className = {styles.flex}> 
          <div className = {styles.header_sub}>{each.type}</div> 
          <div className = {styles.header_sub}>{each.place}</div> 
          </div>}
          />
          <div > <Blogfan/>  </div>
        </Container>

        <Container sx={{ml:'40px', display : 'flex' }}> 
          <img className = {styles.blogicon} src="../static/images/avatar/blogicon.png"/> 
          <div className = {styles.subheader}> {each.blogdetails} </div> 
          <div className = {styles.detailsdepth}> {each.detailsdepth} </div> 
        </Container>
        <Search props = {each.detailsdepth}/>
        
        <Link href={each.title_content_url} underline="none"> 
        <Container sx={{my: '10px', color: '#0c43b7', fontSize: '1.6rem', ml:'40px' }} className = {styles.contenttitle}> {each.title} </Container> 
        </Link>  
  
        <Container className = {styles.flex_allign}>
          <Container>
            <Link href={each.title_content_url} underline="none"> <Container sx={{my: '10px', color: "#404040", fontSize: '1.3rem' }}> {each.content} </Container> </Link>
            <Container sx={{my: '10px', color: 'grey', fontSize: '1.1rem' }}> {each.date} </Container>
          </Container>
          <Link href={each.title_content_url} underline="none"> <img className = {styles.image} src="/static/images/avatar/blog_1.png"/> </Link>
        </Container>
      </Card>)}
    </Container>
  )
}