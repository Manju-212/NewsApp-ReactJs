import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    // articles = [
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Fred Pleitgen, Mohammed Tawfeeq, Josh Pennington and Jonny Hallam, CNN",
    //         "title": "Daughter of 'spiritual guide' to Putin's Ukraine invasion killed in car explosion: Russian media - CNN",
    //         "description": "Darya Dugina, the daughter of influential Russian philosopher Alexander Dugin, was reportedly killed on Saturday when the car she was traveling in exploded in the Moscow region, the Russian state news agency TASS has reported.",
    //         "url": "https://www.cnn.com/2022/08/20/europe/darya-dugina-killed-car-explosion-alexander-dugin-russia-intl-hnk/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220820225925-01-darya-dugina-car-crash-alexander-dugin-russia-super-tease.jpg",
    //         "publishedAt": "2022-08-21T03:36:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Page Six"
    //         },
    //         "author": "Bernie Zilio",
    //         "title": "See Jennifer Lopez and Ben Affleck kiss as their kids look on at luxe wedding - Page Six",
    //         "description": "The pair locked lips in front of their family and friends during their second wedding ceremony in Georgia on Saturday night.",
    //         "url": "https://pagesix.com/2022/08/20/jennifer-lopez-ben-affleck-kiss-in-front-of-kids-at-georgia-wedding/",
    //         "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/08/jlo-ben-affleck-kiss-wedding-kids.jpg?quality=75&strip=all&w=1200",
    //         "publishedAt": "2022-08-21T03:33:00Z",
    //         "content": "Sealed with a kiss or 10! \r\nJennifer Lopez and Ben Affleck???s kids??? presence didn???t stop them from smooching at their second wedding ceremony on Saturday night in Georgia. \r\nThe pair ??? who were dresse??? [+2460 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MMA Fighting"
    //         },
    //         "author": "MMA Fighting Newswire",
    //         "title": "UFC 278 Results: Usman vs. Edwards 2 - MMA Fighting",
    //         "description": "Get UFC 278 results for the Usman vs. Edwards 2 event Saturday night in Salt Lake City.",
    //         "url": "https://www.mmafighting.com/2022/8/20/23312842/ufc-278-results-usman-vs-edwards-2",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/ZhBEm1MEmjNp6lYQtP0cNBTSYkI=/0x0:8169x4277/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23958529/1415877247.jpg",
    //         "publishedAt": "2022-08-21T02:09:15Z",
    //         "content": "MMA Fighting has UFC 278 results for the Usman vs. Edwards 2 fight card, live blogs of all the main card fights, and live UFC 278 Twitter updates from Vivint Arena in Salt Lake City, Utah.\r\nIn the ma??? [+1341 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Guardian staff reporter",
    //         "title": "Volodymyr Zelenskiy warns of possible ???vicious??? Russian attack ahead of Ukraine independence day - The Guardian",
    //         "description": "President urges Ukrainians to stay vigilant as they mark independence from Soviet rule; curfew to be extended in Kharkiv as tensions mount",
    //         "url": "https://amp.theguardian.com/world/2022/aug/21/volodymyr-zelenskiy-warns-of-vicious-russian-attack-ahead-of-ukraine-independence-day",
    //         "urlToImage": null,
    //         "publishedAt": "2022-08-21T01:59:00Z",
    //         "content": "UkrainePresident urges Ukrainians to stay vigilant as they mark independence from Soviet rule; curfew to be extended in Kharkiv as tensions mount\r\nSun 21 Aug 2022 02.45 BST\r\nPresident Volodymyr Zelen??? [+5372 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ESPN"
    //         },
    //         "author": "Mike Coppinger",
    //         "title": "Oleksandr Usyk's victory builds a clear path to the undisputed championship -- if Tyson Fury wants it - ESPN",
    //         "description": "Where do we go from here in the heavyweight division? All eyes shift once again to Tyson Fury.",
    //         "url": "https://www.espn.com/boxing/story/_/id/34431845/oleksandr-usyk-victory-anthony-joshua-builds-clear-path-undisputed-championship-tyson-fury-wants-it",
    //         "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0820%2Fr1050853_1296x729_16%2D9.jpg",
    //         "publishedAt": "2022-08-21T01:50:46Z",
    //         "content": "Oleksandr Usyk proved once again that he's arguably one of the best fighters in the world with a gutsy victory over Anthony Joshua on Saturday in Jeddah, Saudi Arabia, to retain his three heavyweight??? [+5793 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WGN TV Chicago"
    //         },
    //         "author": "Alonzo Small",
    //         "title": "Body recovered at Playpen after boater sighting: report - WGN TV Chicago",
    //         "description": "The body was recovered in the 1000 of N. DuSable Lake Shore Drive just after 5 p.m.",
    //         "url": "https://wgntv.com/news/chicago-news/body-recovered-at-playpen-after-boater-sighting-report/",
    //         "urlToImage": "https://wgntv.com/wp-content/uploads/sites/5/2022/08/50C70CEF1AB701DE8E796BA3231041A1.jpg?w=1280",
    //         "publishedAt": "2022-08-21T01:38:21Z",
    //         "content": "CHICAGO The body of an adult male was recovered from Lake Michigan Saturday evening, according to Chicago police. \r\nThe body was recovered in the 1000 of N. DuSable Lake Shore Drive just after 5 p.m.??? [+1139 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Christopher Scarglato",
    //         "title": "Panthers' Matt Corral likely out for season from 'significant' foot injury - New York Post ",
    //         "description": "Carolina rookie quarterback Matt Corral will likely be out for his debut season because of a ???significant??? foot injury.",
    //         "url": "https://nypost.com/2022/08/20/panthers-matt-corral-likely-out-for-season-from-significant-foot-injury/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/GettyImages-1415900613-e1661042071845.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2022-08-21T00:46:00Z",
    //         "content": "Carolina Panthers rookie quarterback Matt Corral likely will be out for the season because of a significant foot injury, according to an ESPN report. \r\nThe neophyte damaged his left foot during the P??? [+1023 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Variety"
    //         },
    //         "author": "Gene Maddaus",
    //         "title": "SAG-AFTRA Approves Deal Allowing Actors to Appear on Multiple Shows - Variety",
    //         "description": "You might start seeing a lot more of your favorite TV actors, as their union approved a deal on Saturday allowing them to appear in multiple shows at the same time. SAG-AFTRA has been lobbying for a decade to curtail so-called ???exclusivity??? agreements, which ???",
    //         "url": "https://variety.com/2022/tv/news/sag-aftra-exclusivity-window-agreement-1235346622/",
    //         "urlToImage": "https://variety.com/wp-content/uploads/2018/11/sag-aftra-building.jpg?w=1000",
    //         "publishedAt": "2022-08-21T00:42:00Z",
    //         "content": "You might start seeing a lot more of your favorite TV actors, as their union approved a deal on Saturday allowing them to appear in multiple shows at the same time.\r\nSAG-AFTRA has been lobbying for a??? [+2519 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Paradise Afshar and Christina Maxouris, CNN",
    //         "title": "Washington state's King County declares monkeypox a public health emergency - CNN",
    //         "description": "Washington state's King County, which includes Seattle, declared monkeypox a public health emergency Friday, with more than 270 recorded cases, according to a proclamation from county executive Dow Constantine.",
    //         "url": "https://www.cnn.com/2022/08/20/us/king-county-washington-monkeypox-emergency/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220820183549-02-king-county-washington-monkeypox-emergency-super-tease.jpg",
    //         "publishedAt": "2022-08-21T00:16:00Z",
    //         "content": "(CNN)Washington state's King County, which includes Seattle, declared monkeypox a public health emergency Friday, with more than 270 recorded cases, according to a proclamation from county executive ??? [+2456 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Dana Kennedy",
    //         "title": "Boat goes up in smoke, sinks on Hudson River - New York Post ",
    //         "description": "Both firefighters and cops turned out to help fight the thick, black smoke that came off the 48-foot yacht after it caught fire sometime around 3:30 p.m., an NYPD spokeswoman said.",
    //         "url": "https://nypost.com/2022/08/20/boat-goes-up-in-smoke-and-sinks-on-hudson-river-in-nyc/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/newspress-collage-23546489-1661039714697.jpg?quality=75&strip=all&1661025416&w=1024",
    //         "publishedAt": "2022-08-21T00:08:00Z",
    //         "content": "A boat caught fire and sank during the middle of an otherwise picture-perfect Saturday on the Hudson River.\r\nBoth firefighters and cops turned out to help fight the thick, black smoke that came off t??? [+276 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Daily Beast"
    //         },
    //         "author": "David Axe",
    //         "title": "Scientists Fear Polio Plan Will Be Repeat of COVID Horror Show - The Daily Beast",
    //         "description": "The U.S. is refusing to allow widespread polio testing outside of government labs. Some experts are wondering if the CDC learned anything from its COVID mistakes.",
    //         "url": "https://www.thedailybeast.com/scientists-fear-polio-plan-will-be-repeat-of-covid-horror-show",
    //         "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1125,w_2000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1661008597/220820-axe-polio-crisis-hero_uymwvw",
    //         "publishedAt": "2022-08-21T00:02:41Z",
    //         "content": "Polio has reappeared in the United States for the first time in a generation. On July 18, the New York State Department of Health told the U.S. Centers for Disease and Control and Prevention it had d??? [+6113 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Melissa Klein",
    //         "title": "First juvenile monkeypox case identified in New York - New York Post ",
    //         "description": "Data posted to the state Health Department website says only that the case is in a patient who lives outside of New York City.",
    //         "url": "https://nypost.com/2022/08/20/first-juvenile-monkeypox-case-identified-in-new-york/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/Monkeypox-6.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2022-08-20T23:44:00Z",
    //         "content": "The first case of monkeypox in someone younger than 18 has been identified in New York, according to health officials.\r\nData posted to the state Health Department website says only that the case is i??? [+368 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Space.com"
    //         },
    //         "author": "Tariq Malik",
    //         "title": "SpaceX Dragon cargo ship returns to Earth from space station - Space.com",
    //         "description": "The SpaceX-25 Dragon cargo ship returned 4,000 pounds of science experiments and more to Earth.",
    //         "url": "https://www.space.com/spaceX-dragon-cargo-ship-25-splashdown-success",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/Q3gNJ4uAMViNfVUoJSc7vN-1200-80.jpg",
    //         "publishedAt": "2022-08-20T22:38:59Z",
    //         "content": "A SpaceX Dragon cargo ship returned to Earth with an ocean splashdown on Saturday (Aug. 20) carrying tons of science gear from the International Space Station. \r\nThe uncrewed Dragon space capsule spl??? [+2469 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "At least 32 people killed in Turkey in separate crashes at accident sites - Reuters",
    //         "description": "At least 32 people were killed in southeast Turkey on Saturday when vehicles crashed into first respondents who were attending earlier accidents, authorities said.",
    //         "url": "https://www.reuters.com/world/middle-east/sixteen-people-killed-turkey-bus-crashes-accident-site-2022-08-20/",
    //         "urlToImage": "https://www.reuters.com/resizer/I6kBC88WoWZCNbrKiT72zKe3q5I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H7APSZJEYFL6RN77VRY35LHKGE.jpg",
    //         "publishedAt": "2022-08-20T22:20:00Z",
    //         "content": "ISTANBUL, Aug 20 (Reuters) - At least 32 people were killed in southeast Turkey on Saturday when vehicles crashed into first respondents who were attending earlier accidents, authorities said.\r\nSixte??? [+1431 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Ramon Antonio Vargas",
    //         "title": "Louisiana woman faces ???horrifically cruel??? abortion choice over fetus missing skull - The Guardian",
    //         "description": "Nancy Davis, denied abortion in home state despite fetus being diagnosed with fatal skull condition, forced to travel for procedure",
    //         "url": "https://amp.theguardian.com/world/2022/aug/20/louisiana-abortion-woman-nancy-davis-benjamin-crump",
    //         "urlToImage": "https://i.guim.co.uk/img/media/a13a4fffaedce720973fab027fbfb234327a67a7/15_0_450_270/master/450.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3db603d280f893cd65653cb1c7381065",
    //         "publishedAt": "2022-08-20T22:17:00Z",
    //         "content": "A pregnant Louisiana woman faced with either carrying a skull-less fetus to term for the baby to likely die within hours or traveling several states away to obtain an abortion has hired a prominent c??? [+4235 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-wall-street-journal",
    //             "name": "The Wall Street Journal"
    //         },
    //         "author": "Nora Eckert",
    //         "title": "Ford Faces $1.7 Billion Verdict in Fatal Rollover of F-250 Pickup - The Wall Street Journal",
    //         "description": "The auto maker says the verdict reached by a Georgia jury isn???t supported by the evidence.",
    //         "url": "https://www.wsj.com/articles/ford-faces-1-7-billion-verdict-in-fatal-rollover-of-f-250-pickup-11661033662",
    //         "urlToImage": "https://images.wsj.net/im-607916/social",
    //         "publishedAt": "2022-08-20T22:14:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Daily Beast"
    //         },
    //         "author": "Josh Fiallo",
    //         "title": "Finnish Musician Denies 'Inappropriate' Relations With Prime Minister Sanna Marin - The Daily Beast",
    //         "description": "The musician, 28, says he and the married Finnish leader are just friends, despite some ???speculation??? to the contrary.",
    //         "url": "https://www.thedailybeast.com/finnish-musician-olavi-uusivirta-denies-affair-with-prime-minister-sanna-marin",
    //         "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1661033297/220820-sanna-marin-finland-hero_i5xfay",
    //         "publishedAt": "2022-08-20T22:11:22Z",
    //         "content": "The Finnish musician captured on camera dancing up close with Finlands married Prime Minister Sanna Marin has spoken out publicly to deny having an affair with the leader.\r\nOlavi Uusivirta made the a??? [+1717 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "FHP seeks info on driver in wrong-way crash that killed 5 on Palmetto Expressway - WPLG Local 10",
    //         "description": "5 people are dead after a wrong-way crash on the Palmetto Expressway Saturday morning.",
    //         "url": "https://www.youtube.com/watch?v=z5b2f7E-690",
    //         "urlToImage": "https://i.ytimg.com/vi/z5b2f7E-690/hqdefault.jpg",
    //         "publishedAt": "2022-08-20T22:05:28Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Chuck Johnston, CNN",
    //         "title": "Actor Gary Busey faces sex offense charges at Monster Mania Convention in New Jersey - CNN",
    //         "description": "Actor Gary Busey is facing sex offense charges that allegedly occurred during the annual Monster Mania Convention hosted at the Doubletree Hotel in Cherry Hill, New Jersey last weekend, according to police.",
    //         "url": "https://www.cnn.com/2022/08/20/entertainment/gary-busey-sex-offense-charge/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220820160201-gary-busey-file-super-tease.jpg",
    //         "publishedAt": "2022-08-20T21:24:00Z",
    //         "content": "(CNN)Actor Gary Busey is facing sex offense charges that allegedly occurred during the annual Monster Mania Convention hosted at the Doubletree Hotel in Cherry Hill, New Jersey last weekend, accordin??? [+990 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-news",
    //             "name": "Fox News"
    //         },
    //         "author": "Kyle Morris",
    //         "title": "McConnell complains about 'candidate quality' while investing in Senate races for GOP contenders - Fox News",
    //         "description": "Despite concerns over \"candidate quality\" in Senate races across the country, McConnell continues investing in GOP candidates, many of whom have criticized his leadership.",
    //         "url": "https://www.foxnews.com/politics/mcconnell-complains-candidate-quality-investing-senate-races-gop-contenders",
    //         "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/GettyImages-1242129031.jpg",
    //         "publishedAt": "2022-08-20T21:04:21Z",
    //         "content": "Senate Minority Leader Mitch McConnell could soon be faced with a new wave of Republicans in the Senate who oppose his messaging, however he continues to offer support for those representing the GOP ??? [+6246 chars]"
    //     }
    // ]
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            total : 0
        }
    }
    async UpdateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7b880e7cc98a47a9a877e50bc73024ba&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.totalResults);
        this.setState({ articles: parsedData.articles, total: parsedData.totalResults, loading: false })
    }
    async componentDidMount() {
        this.UpdateNews();
    }
    // handlePrevious = async () => {
    //     await this.setState({ page: this.state.page - 1 })
    //     this.UpdateNews();

    // }
    // handleNext = async () => {
    //     await this.setState({ page: this.state.page + 1 })
    //     this.UpdateNews();
    // }
    fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7b880e7cc98a47a9a877e50bc73024ba&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.totalResults);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), total: parsedData.totalResults, loading: false })
      };
    
    render() {
        return (
            <>
              
                    <h1 align="center">NewsApp Top Headlines</h1>
                    {this.state.loading && <Spinner />}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                        // inverse={true} 
                        hasMore={this.state.articles.length!==this.state.total}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                    >
                    <div className='container'>
                        <div className='row my-3'>
                            {this.state.articles.map((ele) => {
                                return <div className='col-md-4 my-3 ' key={ele.url} >
                                    <NewsItem title={ele.title === null ? "" : ele.title.slice(0, 50)} Description={ele.description === null ? "" : ele.description.slice(0, 90)} imgurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt} />
                                </div>
                            })
                            }
                        </div>
                    </div>
                    </InfiniteScroll>
                    {/* <div className='d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-3" onClick={this.handlePrevious}>&larr;Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.total / this.props.pageSize)} type="button" className="btn btn-dark my-3" onClick={this.handleNext}>Next&rarr;</button>
                    </div> */}
            </>
        )
    }
}
export function createNews() {
    return new News();
}

export default News
