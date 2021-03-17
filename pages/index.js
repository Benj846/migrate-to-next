import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export default function Home() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:23306/graphql",
    // uri: 'http://121.0.123.233:23306/graphql'
  });
  return (
    <ApolloProvider client={client}>
      <div className='navbar-wrapper'>
        <nav className='navbar navbar-expand'>
          <div className='navbar-inner'>
            <div className='navbar-nav'>
              <Link href='/'>
                <a className='navbar-brand'></a>
                {/* <Image className='fapply_logo' src='../public/fapply_logo.svg' alt='fapply_logo' /> */}
              </Link>
              <li className='nav-item'>
                <Link href='/recruitment'>
                  <a className='nav-link'>채용공고</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/career'>
                  <a className='navbar-link'>커리어</a>
                </Link>
              </li>
              {/* {loginInfo.userType === 0 || loginInfo.userType === -1 ? (
                <>
                  <li className='nav-item'>
                    <Link to={"/calendar"} className='nav-link'>
                      채용달력
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={`/resume/${loginInfo.uid}`} className='nav-link'>
                      이력서
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className='nav-item'>
                    <Link to={"/headhunting"} className='nav-link'>
                      인재검색/채용제안
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to={"/recriutmanage"} className='nav-link'>
                      채용공고관리
                    </Link>
                  </li>
                </>
              )} */}
            </div>
            <div className='utility'>
              {/* <button className="signin-btn" onClick={toggleSigninPopup}> */}
              {/* {loginInfo.isSuccess ? (
                `${loginInfo.uid.substr(0, loginInfo.uid.indexOf("@"))}님 `
              ) : (
                <button className='signin-btn' onClick={toggleSigninPopup}>
                  로그인/회원가입
                </button>
              )} */}
              {/* </button> */}
              {/* {loginInfo.isSuccess ? (
                <Link to={`/mypage/${loginInfo.uid}`} className='nav-link'>
                  마이페이지
                </Link>
              ) : null} */}
              {/* <Link to={'/mypage'} className="nav-link">
              마이페이지
            </Link> */}
              <button className='business-btn'>기업페이지</button>
            </div>
          </div>
        </nav>
        {/* {showPopup ? <SignInComponent closePopup={toggleSigninPopup} setLoginInfo={setLoginInfo} /> : null} */}
        {/* <Switch>
          <Route exact path='/' component={MainComponent} />
          <Route exact path='/recruitment' component={RecruitmentComponent} />
          <Route exact path='/career' component={Career} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/resume/:uid' component={Resume} />
          <Route exact path='/mypage/:uid' component={MyPageComponent} />
          <Route exact path='/headhunting' component={HeadhuntingComponent} />
        </Switch> */}
      </div>
    </ApolloProvider>
  );
}
