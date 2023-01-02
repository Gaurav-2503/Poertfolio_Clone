import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useNavbarCb, usenavbarFlexCb, useNavLinksCb, useFlex14Cb, uselogo_flexCb, useHeroCb, useFlex28Cb, useHero2Cb, useHero1Cb, usesubmitCVCb, useDownloadCVCb, useButtonsCb, useupBtnCb, usedwnBtnCb, useDiv7Cb, useheadingCb, useDiv6Cb, useTrusedCb, useFlex25Cb, usecompCb, useTrustedByCb, useServiceFlexCb, useServiceBodyCb, useCard3Cb, useFlex43Cb, useFlex34Cb, useFlex35Cb, useFlex36Cb, useCard2Cb, useFlex44Cb, useFlex37Cb, useFlex38Cb, useFlex39Cb, useCard1Cb, useFlex45Cb, useFlex40Cb, useFlex41Cb, useFlex42Cb, useServiceHeadCb, useFlex49Cb, useProjectsCb, useProjectHeroCb, useFlex53Cb, useprojButtonsCb, usePdwnbtnCb, usePupBtnCb, useFlex196Cb, useFlex197Cb, useFlex198Cb, useproj1MainImgFCb, useprojImgHolder1Cb, useFlex202Cb, useFlex209Cb, useFlex213Cb, useFlex211Cb, useFlex210Cb, useproj2MainImgFCb, useprojImgHolder2Cb, useFlex217Cb, useFlex215Cb, useFlex214Cb, useprojMainImgFCb, useprojImgHolder3Cb, useFlex222Cb, useFlex223Cb, useFlex224Cb, useBlogsCb, useBlogsBodyCb, useRightArticlesCb, useArticlesCb, useFlex69Cb, useFlex61Cb, useFlex62Cb, useFlex57Cb, useFlex70Cb, useFlex63Cb, useFlex64Cb, useFlex58Cb, useArticleBody2Cb, useFlex65Cb, useFlex66Cb, useFlex59Cb, useArticlesBodyCb, useReadBlogCb, useFlex60Cb, useDateMinCb, useLeftHeadingCb, useFlex74Cb, useExperienceboxCb, useexpMainCb, useexptRightCb, usecompaniesCb, useFlex134Cb, useFlex128Cb, useFlex119Cb, useFlex120Cb, useFlex107Cb, useFlex108Cb, useFlex135Cb, useFlex129Cb, useFlex121Cb, useFlex122Cb, useFlex109Cb, useFlex110Cb, useFlex136Cb, useFlex130Cb, useFlex123Cb, useFlex111Cb, useFlex112Cb, useFlex124Cb, userightHeadCb, useexpLeftCb, usecollegesCb, useFlex137Cb, usecollege1Cb, useFlex125Cb, useFlex113Cb, useFlex114Cb, useFlex101Cb, useFlex102Cb, useFlex132Cb, useFlex126Cb, useFlex115Cb, useFlex116Cb, useFlex103Cb, useFlex104Cb, useFlex133Cb, useFlex127Cb, useFlex117Cb, useFlex118Cb, useFlex105Cb, useFlex106Cb, useleftHeadCb, useTestimonialsCb, useTestiMainCb, usetestiContentCb, usetestiRightCb, usetrBottomCb, useFlex146Cb, useFlex147Cb, usetrTopCb, useTestiImgCb, usetestiheadCb, useFAQCb, usefooterCb, usefaqContactCb, uselinksCb, usecontactLinksCb, useFlex185Cb, useFlex188Cb, useFlex189Cb, usecontactMeCb, useFlex159Cb, usecontactHeadingCb, usecontactHeadColorCb, usefaqsCb, usefaqsRightCb, usefaq5Cb, useFaq6Cb, useFaq8Cb, useFaq9Cb, usefaqsLeftCb, useFaq4Cb, useFaq3Cb, useFaq2Cb, useFaq1Cb, usefaqHeadCb, useAboutmeCb, useAboutImagesCb, useFimg3Cb, useImg2Cb, useimg1Cb, useAboutHeroCb, useRightheadCb, useLeftHeadCb, useFlex193Cb, useBlogCb, useprojectsCb, useservicesCb, useAboutCb, useImage15Cb, useBookingCb, useDotCb, useLink50Cb, usePhotoCb, useImage5Cb, usedcvCb, useBookCallCb, useTalkNowCb, usesubheadCb, useTextBox12Cb, useTextBox10Cb, useImage9Cb, useImage8Cb, useImage7Cb, useImage6Cb, useTextBox8Cb, useTextBox32Cb, useTextBox33Cb, useImage23Cb, useTextBox14Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useTextBox19Cb, useTextBox34Cb, useTextBox35Cb, useImage24Cb, useTextBox20Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useTextBox25Cb, useImage25Cb, useTextBox36Cb, useTextBox37Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useTextBox9Cb, useTextBox38Cb, useTextBox39Cb, useTextBox41Cb, useprojHeadCb, useTextBox43Cb, useViewProjCb, useTextBox135Cb, usepImage1Cb, useTextBox136Cb, useprojHead1Cb, useproj1Cb, useImage69Cb, useprojHead2Cb, useTextBox139Cb, useImage70Cb, useproj2Cb, usepImage2Cb, useprojHead3Cb, useTextBox141Cb, useImage72Cb, useproj3Cb, usepImage3Cb, useImage76Cb, useImage78Cb, useTextBox56Cb, useDiv9Cb, useTextBox44Cb, useTextBox45Cb, useTextBox46Cb, useLink16Cb, useImage26Cb, useTextBox57Cb, useDiv10Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useLink17Cb, useImage27Cb, useTextBox58Cb, useDiv11Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useLink18Cb, useImage28Cb, useDiv12Cb, useHeadingCb, useImage29Cb, useLink19Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useTextBox70Cb, useTextBox61Cb, useLink20Cb, useImage30Cb, useDiv20Cb, useImage42Cb, useTextBox92Cb, useTextBox93Cb, useTextBox83Cb, useImage39Cb, useDiv21Cb, useImage43Cb, useTextBox94Cb, useTextBox95Cb, useTextBox84Cb, useImage40Cb, useDiv22Cb, useImage44Cb, useImage41Cb, useTextBox85Cb, useTextBox96Cb, useTextBox97Cb, useImage45Cb, useTextBox98Cb, useDiv17Cb, useTextBox86Cb, useTextBox87Cb, useTextBox80Cb, useImage36Cb, useDiv18Cb, useTextBox88Cb, useTextBox89Cb, useTextBox81Cb, useImage37Cb, useDiv19Cb, useTextBox90Cb, useTextBox91Cb, useTextBox82Cb, useImage38Cb, useTextBox99Cb, useImage46Cb, useImage47Cb, useImage48Cb, useTextBox100Cb, useTextBox101Cb, useImage49Cb, useTextBox102Cb, useImage50Cb, usetestiheadingCb, useTextBox104Cb, useLink35Cb, useLink36Cb, useLink37Cb, useTextBox118Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useLink38Cb, useLink39Cb, useLink40Cb, useTextBox124Cb, useaboutCb, usecontactCb, usedribbbleCb, useinstaCb, useblogCb, useervicesCb, useLink47Cb, useprojectCb, useexperienceCb, useTextBox106Cb, useTextBox107Cb, useTextBox105Cb, useImage51Cb, useTextBox117Cb, useTextBox116Cb, useDiv30Cb, useTextBox108Cb, useImage52Cb, useImage53Cb, useTextBox109Cb, useImage54Cb, useTextBox110Cb, useImage55Cb, useTextBox111Cb, useTextBox112Cb, useImage56Cb, useTextBox113Cb, useImage57Cb, useTextBox114Cb, useImage58Cb, useImage59Cb, useTextBox115Cb, useTextBox125Cb, usefaqHeadingCb, useImage60Cb, useImage61Cb, useImage62Cb, useImage63Cb, useRighttextCb, useProdDesCb, useTextBox129Cb, useImage65Cb, useLink53Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const navbarFlexProps = useStore((state)=>state["Home"]["navbarFlex"]);
const navbarFlexIoProps = useIoStore((state)=>state["Home"]["navbarFlex"]);
const navbarFlexCb = usenavbarFlexCb()
const NavLinksProps = useStore((state)=>state["Home"]["NavLinks"]);
const NavLinksIoProps = useIoStore((state)=>state["Home"]["NavLinks"]);
const NavLinksCb = useNavLinksCb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const logo_flexProps = useStore((state)=>state["Home"]["logo_flex"]);
const logo_flexIoProps = useIoStore((state)=>state["Home"]["logo_flex"]);
const logo_flexCb = uselogo_flexCb()
const HeroProps = useStore((state)=>state["Home"]["Hero"]);
const HeroIoProps = useIoStore((state)=>state["Home"]["Hero"]);
const HeroCb = useHeroCb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Hero2Props = useStore((state)=>state["Home"]["Hero2"]);
const Hero2IoProps = useIoStore((state)=>state["Home"]["Hero2"]);
const Hero2Cb = useHero2Cb()
const Hero1Props = useStore((state)=>state["Home"]["Hero1"]);
const Hero1IoProps = useIoStore((state)=>state["Home"]["Hero1"]);
const Hero1Cb = useHero1Cb()
const submitCVProps = useStore((state)=>state["Home"]["submitCV"]);
const submitCVIoProps = useIoStore((state)=>state["Home"]["submitCV"]);
const submitCVCb = usesubmitCVCb()
const DownloadCVProps = useStore((state)=>state["Home"]["DownloadCV"]);
const DownloadCVIoProps = useIoStore((state)=>state["Home"]["DownloadCV"]);
const DownloadCVCb = useDownloadCVCb()
const ButtonsProps = useStore((state)=>state["Home"]["Buttons"]);
const ButtonsIoProps = useIoStore((state)=>state["Home"]["Buttons"]);
const ButtonsCb = useButtonsCb()
const upBtnProps = useStore((state)=>state["Home"]["upBtn"]);
const upBtnIoProps = useIoStore((state)=>state["Home"]["upBtn"]);
const upBtnCb = useupBtnCb()
const dwnBtnProps = useStore((state)=>state["Home"]["dwnBtn"]);
const dwnBtnIoProps = useIoStore((state)=>state["Home"]["dwnBtn"]);
const dwnBtnCb = usedwnBtnCb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const headingProps = useStore((state)=>state["Home"]["heading"]);
const headingIoProps = useIoStore((state)=>state["Home"]["heading"]);
const headingCb = useheadingCb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const TrusedProps = useStore((state)=>state["Home"]["Trused"]);
const TrusedIoProps = useIoStore((state)=>state["Home"]["Trused"]);
const TrusedCb = useTrusedCb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const compProps = useStore((state)=>state["Home"]["comp"]);
const compIoProps = useIoStore((state)=>state["Home"]["comp"]);
const compCb = usecompCb()
const TrustedByProps = useStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByIoProps = useIoStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByCb = useTrustedByCb()
const ServiceFlexProps = useStore((state)=>state["Home"]["ServiceFlex"]);
const ServiceFlexIoProps = useIoStore((state)=>state["Home"]["ServiceFlex"]);
const ServiceFlexCb = useServiceFlexCb()
const ServiceBodyProps = useStore((state)=>state["Home"]["ServiceBody"]);
const ServiceBodyIoProps = useIoStore((state)=>state["Home"]["ServiceBody"]);
const ServiceBodyCb = useServiceBodyCb()
const Card3Props = useStore((state)=>state["Home"]["Card3"]);
const Card3IoProps = useIoStore((state)=>state["Home"]["Card3"]);
const Card3Cb = useCard3Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Card2Props = useStore((state)=>state["Home"]["Card2"]);
const Card2IoProps = useIoStore((state)=>state["Home"]["Card2"]);
const Card2Cb = useCard2Cb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Card1Props = useStore((state)=>state["Home"]["Card1"]);
const Card1IoProps = useIoStore((state)=>state["Home"]["Card1"]);
const Card1Cb = useCard1Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const ServiceHeadProps = useStore((state)=>state["Home"]["ServiceHead"]);
const ServiceHeadIoProps = useIoStore((state)=>state["Home"]["ServiceHead"]);
const ServiceHeadCb = useServiceHeadCb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const ProjectHeroProps = useStore((state)=>state["Home"]["ProjectHero"]);
const ProjectHeroIoProps = useIoStore((state)=>state["Home"]["ProjectHero"]);
const ProjectHeroCb = useProjectHeroCb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const projButtonsProps = useStore((state)=>state["Home"]["projButtons"]);
const projButtonsIoProps = useIoStore((state)=>state["Home"]["projButtons"]);
const projButtonsCb = useprojButtonsCb()
const PdwnbtnProps = useStore((state)=>state["Home"]["Pdwnbtn"]);
const PdwnbtnIoProps = useIoStore((state)=>state["Home"]["Pdwnbtn"]);
const PdwnbtnCb = usePdwnbtnCb()
const PupBtnProps = useStore((state)=>state["Home"]["PupBtn"]);
const PupBtnIoProps = useIoStore((state)=>state["Home"]["PupBtn"]);
const PupBtnCb = usePupBtnCb()
const Flex196Props = useStore((state)=>state["Home"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["Home"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex197Props = useStore((state)=>state["Home"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["Home"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex198Props = useStore((state)=>state["Home"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["Home"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const proj1MainImgFProps = useStore((state)=>state["Home"]["proj1MainImgF"]);
const proj1MainImgFIoProps = useIoStore((state)=>state["Home"]["proj1MainImgF"]);
const proj1MainImgFCb = useproj1MainImgFCb()
const projImgHolder1Props = useStore((state)=>state["Home"]["projImgHolder1"]);
const projImgHolder1IoProps = useIoStore((state)=>state["Home"]["projImgHolder1"]);
const projImgHolder1Cb = useprojImgHolder1Cb()
const Flex202Props = useStore((state)=>state["Home"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["Home"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex209Props = useStore((state)=>state["Home"]["Flex209"]);
const Flex209IoProps = useIoStore((state)=>state["Home"]["Flex209"]);
const Flex209Cb = useFlex209Cb()
const Flex213Props = useStore((state)=>state["Home"]["Flex213"]);
const Flex213IoProps = useIoStore((state)=>state["Home"]["Flex213"]);
const Flex213Cb = useFlex213Cb()
const Flex211Props = useStore((state)=>state["Home"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["Home"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Flex210Props = useStore((state)=>state["Home"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["Home"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const proj2MainImgFProps = useStore((state)=>state["Home"]["proj2MainImgF"]);
const proj2MainImgFIoProps = useIoStore((state)=>state["Home"]["proj2MainImgF"]);
const proj2MainImgFCb = useproj2MainImgFCb()
const projImgHolder2Props = useStore((state)=>state["Home"]["projImgHolder2"]);
const projImgHolder2IoProps = useIoStore((state)=>state["Home"]["projImgHolder2"]);
const projImgHolder2Cb = useprojImgHolder2Cb()
const Flex217Props = useStore((state)=>state["Home"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["Home"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex215Props = useStore((state)=>state["Home"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["Home"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const Flex214Props = useStore((state)=>state["Home"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["Home"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const projMainImgFProps = useStore((state)=>state["Home"]["projMainImgF"]);
const projMainImgFIoProps = useIoStore((state)=>state["Home"]["projMainImgF"]);
const projMainImgFCb = useprojMainImgFCb()
const projImgHolder3Props = useStore((state)=>state["Home"]["projImgHolder3"]);
const projImgHolder3IoProps = useIoStore((state)=>state["Home"]["projImgHolder3"]);
const projImgHolder3Cb = useprojImgHolder3Cb()
const Flex222Props = useStore((state)=>state["Home"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["Home"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex223Props = useStore((state)=>state["Home"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["Home"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["Home"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["Home"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const BlogsProps = useStore((state)=>state["Home"]["Blogs"]);
const BlogsIoProps = useIoStore((state)=>state["Home"]["Blogs"]);
const BlogsCb = useBlogsCb()
const BlogsBodyProps = useStore((state)=>state["Home"]["BlogsBody"]);
const BlogsBodyIoProps = useIoStore((state)=>state["Home"]["BlogsBody"]);
const BlogsBodyCb = useBlogsBodyCb()
const RightArticlesProps = useStore((state)=>state["Home"]["RightArticles"]);
const RightArticlesIoProps = useIoStore((state)=>state["Home"]["RightArticles"]);
const RightArticlesCb = useRightArticlesCb()
const ArticlesProps = useStore((state)=>state["Home"]["Articles"]);
const ArticlesIoProps = useIoStore((state)=>state["Home"]["Articles"]);
const ArticlesCb = useArticlesCb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const ArticleBody2Props = useStore((state)=>state["Home"]["ArticleBody2"]);
const ArticleBody2IoProps = useIoStore((state)=>state["Home"]["ArticleBody2"]);
const ArticleBody2Cb = useArticleBody2Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const ArticlesBodyProps = useStore((state)=>state["Home"]["ArticlesBody"]);
const ArticlesBodyIoProps = useIoStore((state)=>state["Home"]["ArticlesBody"]);
const ArticlesBodyCb = useArticlesBodyCb()
const ReadBlogProps = useStore((state)=>state["Home"]["ReadBlog"]);
const ReadBlogIoProps = useIoStore((state)=>state["Home"]["ReadBlog"]);
const ReadBlogCb = useReadBlogCb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const DateMinProps = useStore((state)=>state["Home"]["DateMin"]);
const DateMinIoProps = useIoStore((state)=>state["Home"]["DateMin"]);
const DateMinCb = useDateMinCb()
const LeftHeadingProps = useStore((state)=>state["Home"]["LeftHeading"]);
const LeftHeadingIoProps = useIoStore((state)=>state["Home"]["LeftHeading"]);
const LeftHeadingCb = useLeftHeadingCb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const ExperienceboxProps = useStore((state)=>state["Home"]["Experiencebox"]);
const ExperienceboxIoProps = useIoStore((state)=>state["Home"]["Experiencebox"]);
const ExperienceboxCb = useExperienceboxCb()
const expMainProps = useStore((state)=>state["Home"]["expMain"]);
const expMainIoProps = useIoStore((state)=>state["Home"]["expMain"]);
const expMainCb = useexpMainCb()
const exptRightProps = useStore((state)=>state["Home"]["exptRight"]);
const exptRightIoProps = useIoStore((state)=>state["Home"]["exptRight"]);
const exptRightCb = useexptRightCb()
const companiesProps = useStore((state)=>state["Home"]["companies"]);
const companiesIoProps = useIoStore((state)=>state["Home"]["companies"]);
const companiesCb = usecompaniesCb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const rightHeadProps = useStore((state)=>state["Home"]["rightHead"]);
const rightHeadIoProps = useIoStore((state)=>state["Home"]["rightHead"]);
const rightHeadCb = userightHeadCb()
const expLeftProps = useStore((state)=>state["Home"]["expLeft"]);
const expLeftIoProps = useIoStore((state)=>state["Home"]["expLeft"]);
const expLeftCb = useexpLeftCb()
const collegesProps = useStore((state)=>state["Home"]["colleges"]);
const collegesIoProps = useIoStore((state)=>state["Home"]["colleges"]);
const collegesCb = usecollegesCb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const college1Props = useStore((state)=>state["Home"]["college1"]);
const college1IoProps = useIoStore((state)=>state["Home"]["college1"]);
const college1Cb = usecollege1Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const leftHeadProps = useStore((state)=>state["Home"]["leftHead"]);
const leftHeadIoProps = useIoStore((state)=>state["Home"]["leftHead"]);
const leftHeadCb = useleftHeadCb()
const TestimonialsProps = useStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsIoProps = useIoStore((state)=>state["Home"]["Testimonials"]);
const TestimonialsCb = useTestimonialsCb()
const TestiMainProps = useStore((state)=>state["Home"]["TestiMain"]);
const TestiMainIoProps = useIoStore((state)=>state["Home"]["TestiMain"]);
const TestiMainCb = useTestiMainCb()
const testiContentProps = useStore((state)=>state["Home"]["testiContent"]);
const testiContentIoProps = useIoStore((state)=>state["Home"]["testiContent"]);
const testiContentCb = usetestiContentCb()
const testiRightProps = useStore((state)=>state["Home"]["testiRight"]);
const testiRightIoProps = useIoStore((state)=>state["Home"]["testiRight"]);
const testiRightCb = usetestiRightCb()
const trBottomProps = useStore((state)=>state["Home"]["trBottom"]);
const trBottomIoProps = useIoStore((state)=>state["Home"]["trBottom"]);
const trBottomCb = usetrBottomCb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex147Props = useStore((state)=>state["Home"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["Home"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const trTopProps = useStore((state)=>state["Home"]["trTop"]);
const trTopIoProps = useIoStore((state)=>state["Home"]["trTop"]);
const trTopCb = usetrTopCb()
const TestiImgProps = useStore((state)=>state["Home"]["TestiImg"]);
const TestiImgIoProps = useIoStore((state)=>state["Home"]["TestiImg"]);
const TestiImgCb = useTestiImgCb()
const testiheadProps = useStore((state)=>state["Home"]["testihead"]);
const testiheadIoProps = useIoStore((state)=>state["Home"]["testihead"]);
const testiheadCb = usetestiheadCb()
const FAQProps = useStore((state)=>state["Home"]["FAQ"]);
const FAQIoProps = useIoStore((state)=>state["Home"]["FAQ"]);
const FAQCb = useFAQCb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const faqContactProps = useStore((state)=>state["Home"]["faqContact"]);
const faqContactIoProps = useIoStore((state)=>state["Home"]["faqContact"]);
const faqContactCb = usefaqContactCb()
const linksProps = useStore((state)=>state["Home"]["links"]);
const linksIoProps = useIoStore((state)=>state["Home"]["links"]);
const linksCb = uselinksCb()
const contactLinksProps = useStore((state)=>state["Home"]["contactLinks"]);
const contactLinksIoProps = useIoStore((state)=>state["Home"]["contactLinks"]);
const contactLinksCb = usecontactLinksCb()
const Flex185Props = useStore((state)=>state["Home"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["Home"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex188Props = useStore((state)=>state["Home"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Home"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex189Props = useStore((state)=>state["Home"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Home"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const contactMeProps = useStore((state)=>state["Home"]["contactMe"]);
const contactMeIoProps = useIoStore((state)=>state["Home"]["contactMe"]);
const contactMeCb = usecontactMeCb()
const Flex159Props = useStore((state)=>state["Home"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Home"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const contactHeadingProps = useStore((state)=>state["Home"]["contactHeading"]);
const contactHeadingIoProps = useIoStore((state)=>state["Home"]["contactHeading"]);
const contactHeadingCb = usecontactHeadingCb()
const contactHeadColorProps = useStore((state)=>state["Home"]["contactHeadColor"]);
const contactHeadColorIoProps = useIoStore((state)=>state["Home"]["contactHeadColor"]);
const contactHeadColorCb = usecontactHeadColorCb()
const faqsProps = useStore((state)=>state["Home"]["faqs"]);
const faqsIoProps = useIoStore((state)=>state["Home"]["faqs"]);
const faqsCb = usefaqsCb()
const faqsRightProps = useStore((state)=>state["Home"]["faqsRight"]);
const faqsRightIoProps = useIoStore((state)=>state["Home"]["faqsRight"]);
const faqsRightCb = usefaqsRightCb()
const faq5Props = useStore((state)=>state["Home"]["faq5"]);
const faq5IoProps = useIoStore((state)=>state["Home"]["faq5"]);
const faq5Cb = usefaq5Cb()
const Faq6Props = useStore((state)=>state["Home"]["Faq6"]);
const Faq6IoProps = useIoStore((state)=>state["Home"]["Faq6"]);
const Faq6Cb = useFaq6Cb()
const Faq8Props = useStore((state)=>state["Home"]["Faq8"]);
const Faq8IoProps = useIoStore((state)=>state["Home"]["Faq8"]);
const Faq8Cb = useFaq8Cb()
const Faq9Props = useStore((state)=>state["Home"]["Faq9"]);
const Faq9IoProps = useIoStore((state)=>state["Home"]["Faq9"]);
const Faq9Cb = useFaq9Cb()
const faqsLeftProps = useStore((state)=>state["Home"]["faqsLeft"]);
const faqsLeftIoProps = useIoStore((state)=>state["Home"]["faqsLeft"]);
const faqsLeftCb = usefaqsLeftCb()
const Faq4Props = useStore((state)=>state["Home"]["Faq4"]);
const Faq4IoProps = useIoStore((state)=>state["Home"]["Faq4"]);
const Faq4Cb = useFaq4Cb()
const Faq3Props = useStore((state)=>state["Home"]["Faq3"]);
const Faq3IoProps = useIoStore((state)=>state["Home"]["Faq3"]);
const Faq3Cb = useFaq3Cb()
const Faq2Props = useStore((state)=>state["Home"]["Faq2"]);
const Faq2IoProps = useIoStore((state)=>state["Home"]["Faq2"]);
const Faq2Cb = useFaq2Cb()
const Faq1Props = useStore((state)=>state["Home"]["Faq1"]);
const Faq1IoProps = useIoStore((state)=>state["Home"]["Faq1"]);
const Faq1Cb = useFaq1Cb()
const faqHeadProps = useStore((state)=>state["Home"]["faqHead"]);
const faqHeadIoProps = useIoStore((state)=>state["Home"]["faqHead"]);
const faqHeadCb = usefaqHeadCb()
const AboutmeProps = useStore((state)=>state["Home"]["Aboutme"]);
const AboutmeIoProps = useIoStore((state)=>state["Home"]["Aboutme"]);
const AboutmeCb = useAboutmeCb()
const AboutImagesProps = useStore((state)=>state["Home"]["AboutImages"]);
const AboutImagesIoProps = useIoStore((state)=>state["Home"]["AboutImages"]);
const AboutImagesCb = useAboutImagesCb()
const Fimg3Props = useStore((state)=>state["Home"]["Fimg3"]);
const Fimg3IoProps = useIoStore((state)=>state["Home"]["Fimg3"]);
const Fimg3Cb = useFimg3Cb()
const Img2Props = useStore((state)=>state["Home"]["Img2"]);
const Img2IoProps = useIoStore((state)=>state["Home"]["Img2"]);
const Img2Cb = useImg2Cb()
const img1Props = useStore((state)=>state["Home"]["img1"]);
const img1IoProps = useIoStore((state)=>state["Home"]["img1"]);
const img1Cb = useimg1Cb()
const AboutHeroProps = useStore((state)=>state["Home"]["AboutHero"]);
const AboutHeroIoProps = useIoStore((state)=>state["Home"]["AboutHero"]);
const AboutHeroCb = useAboutHeroCb()
const RightheadProps = useStore((state)=>state["Home"]["Righthead"]);
const RightheadIoProps = useIoStore((state)=>state["Home"]["Righthead"]);
const RightheadCb = useRightheadCb()
const LeftHeadProps = useStore((state)=>state["Home"]["LeftHead"]);
const LeftHeadIoProps = useIoStore((state)=>state["Home"]["LeftHead"]);
const LeftHeadCb = useLeftHeadCb()
const Flex193Props = useStore((state)=>state["Home"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["Home"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const BlogProps = useStore((state)=>state["Home"]["Blog"]);
const BlogIoProps = useIoStore((state)=>state["Home"]["Blog"]);
const BlogCb = useBlogCb()
const projectsProps = useStore((state)=>state["Home"]["projects"]);
const projectsIoProps = useIoStore((state)=>state["Home"]["projects"]);
const projectsCb = useprojectsCb()
const servicesProps = useStore((state)=>state["Home"]["services"]);
const servicesIoProps = useIoStore((state)=>state["Home"]["services"]);
const servicesCb = useservicesCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const BookingProps = useStore((state)=>state["Home"]["Booking"]);
const BookingIoProps = useIoStore((state)=>state["Home"]["Booking"]);
const BookingCb = useBookingCb()
const DotProps = useStore((state)=>state["Home"]["Dot"]);
const DotIoProps = useIoStore((state)=>state["Home"]["Dot"]);
const DotCb = useDotCb()
const Link50Props = useStore((state)=>state["Home"]["Link50"]);
const Link50IoProps = useIoStore((state)=>state["Home"]["Link50"]);
const Link50Cb = useLink50Cb()
const PhotoProps = useStore((state)=>state["Home"]["Photo"]);
const PhotoIoProps = useIoStore((state)=>state["Home"]["Photo"]);
const PhotoCb = usePhotoCb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const dcvProps = useStore((state)=>state["Home"]["dcv"]);
const dcvIoProps = useIoStore((state)=>state["Home"]["dcv"]);
const dcvCb = usedcvCb()
const BookCallProps = useStore((state)=>state["Home"]["BookCall"]);
const BookCallIoProps = useIoStore((state)=>state["Home"]["BookCall"]);
const BookCallCb = useBookCallCb()
const TalkNowProps = useStore((state)=>state["Home"]["TalkNow"]);
const TalkNowIoProps = useIoStore((state)=>state["Home"]["TalkNow"]);
const TalkNowCb = useTalkNowCb()
const subheadProps = useStore((state)=>state["Home"]["subhead"]);
const subheadIoProps = useIoStore((state)=>state["Home"]["subhead"]);
const subheadCb = usesubheadCb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const projHeadProps = useStore((state)=>state["Home"]["projHead"]);
const projHeadIoProps = useIoStore((state)=>state["Home"]["projHead"]);
const projHeadCb = useprojHeadCb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const ViewProjProps = useStore((state)=>state["Home"]["ViewProj"]);
const ViewProjIoProps = useIoStore((state)=>state["Home"]["ViewProj"]);
const ViewProjCb = useViewProjCb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const pImage1Props = useStore((state)=>state["Home"]["pImage1"]);
const pImage1IoProps = useIoStore((state)=>state["Home"]["pImage1"]);
const pImage1Cb = usepImage1Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const projHead1Props = useStore((state)=>state["Home"]["projHead1"]);
const projHead1IoProps = useIoStore((state)=>state["Home"]["projHead1"]);
const projHead1Cb = useprojHead1Cb()
const proj1Props = useStore((state)=>state["Home"]["proj1"]);
const proj1IoProps = useIoStore((state)=>state["Home"]["proj1"]);
const proj1Cb = useproj1Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const projHead2Props = useStore((state)=>state["Home"]["projHead2"]);
const projHead2IoProps = useIoStore((state)=>state["Home"]["projHead2"]);
const projHead2Cb = useprojHead2Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const proj2Props = useStore((state)=>state["Home"]["proj2"]);
const proj2IoProps = useIoStore((state)=>state["Home"]["proj2"]);
const proj2Cb = useproj2Cb()
const pImage2Props = useStore((state)=>state["Home"]["pImage2"]);
const pImage2IoProps = useIoStore((state)=>state["Home"]["pImage2"]);
const pImage2Cb = usepImage2Cb()
const projHead3Props = useStore((state)=>state["Home"]["projHead3"]);
const projHead3IoProps = useIoStore((state)=>state["Home"]["projHead3"]);
const projHead3Cb = useprojHead3Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const Image72Props = useStore((state)=>state["Home"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Home"]["Image72"]);
const Image72Cb = useImage72Cb()
const proj3Props = useStore((state)=>state["Home"]["proj3"]);
const proj3IoProps = useIoStore((state)=>state["Home"]["proj3"]);
const proj3Cb = useproj3Cb()
const pImage3Props = useStore((state)=>state["Home"]["pImage3"]);
const pImage3IoProps = useIoStore((state)=>state["Home"]["pImage3"]);
const pImage3Cb = usepImage3Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Link16Props = useStore((state)=>state["Home"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["Home"]["Link16"]);
const Link16Cb = useLink16Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Link17Props = useStore((state)=>state["Home"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["Home"]["Link17"]);
const Link17Cb = useLink17Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Link18Props = useStore((state)=>state["Home"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["Home"]["Link18"]);
const Link18Cb = useLink18Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const HeadingProps = useStore((state)=>state["Home"]["Heading"]);
const HeadingIoProps = useIoStore((state)=>state["Home"]["Heading"]);
const HeadingCb = useHeadingCb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Link19Props = useStore((state)=>state["Home"]["Link19"]);
const Link19IoProps = useIoStore((state)=>state["Home"]["Link19"]);
const Link19Cb = useLink19Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Link20Props = useStore((state)=>state["Home"]["Link20"]);
const Link20IoProps = useIoStore((state)=>state["Home"]["Link20"]);
const Link20Cb = useLink20Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const testiheadingProps = useStore((state)=>state["Home"]["testiheading"]);
const testiheadingIoProps = useIoStore((state)=>state["Home"]["testiheading"]);
const testiheadingCb = usetestiheadingCb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Link35Props = useStore((state)=>state["Home"]["Link35"]);
const Link35IoProps = useIoStore((state)=>state["Home"]["Link35"]);
const Link35Cb = useLink35Cb()
const Link36Props = useStore((state)=>state["Home"]["Link36"]);
const Link36IoProps = useIoStore((state)=>state["Home"]["Link36"]);
const Link36Cb = useLink36Cb()
const Link37Props = useStore((state)=>state["Home"]["Link37"]);
const Link37IoProps = useIoStore((state)=>state["Home"]["Link37"]);
const Link37Cb = useLink37Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Link38Props = useStore((state)=>state["Home"]["Link38"]);
const Link38IoProps = useIoStore((state)=>state["Home"]["Link38"]);
const Link38Cb = useLink38Cb()
const Link39Props = useStore((state)=>state["Home"]["Link39"]);
const Link39IoProps = useIoStore((state)=>state["Home"]["Link39"]);
const Link39Cb = useLink39Cb()
const Link40Props = useStore((state)=>state["Home"]["Link40"]);
const Link40IoProps = useIoStore((state)=>state["Home"]["Link40"]);
const Link40Cb = useLink40Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const contactProps = useStore((state)=>state["Home"]["contact"]);
const contactIoProps = useIoStore((state)=>state["Home"]["contact"]);
const contactCb = usecontactCb()
const dribbbleProps = useStore((state)=>state["Home"]["dribbble"]);
const dribbbleIoProps = useIoStore((state)=>state["Home"]["dribbble"]);
const dribbbleCb = usedribbbleCb()
const instaProps = useStore((state)=>state["Home"]["insta"]);
const instaIoProps = useIoStore((state)=>state["Home"]["insta"]);
const instaCb = useinstaCb()
const blogProps = useStore((state)=>state["Home"]["blog"]);
const blogIoProps = useIoStore((state)=>state["Home"]["blog"]);
const blogCb = useblogCb()
const ervicesProps = useStore((state)=>state["Home"]["ervices"]);
const ervicesIoProps = useIoStore((state)=>state["Home"]["ervices"]);
const ervicesCb = useervicesCb()
const Link47Props = useStore((state)=>state["Home"]["Link47"]);
const Link47IoProps = useIoStore((state)=>state["Home"]["Link47"]);
const Link47Cb = useLink47Cb()
const projectProps = useStore((state)=>state["Home"]["project"]);
const projectIoProps = useIoStore((state)=>state["Home"]["project"]);
const projectCb = useprojectCb()
const experienceProps = useStore((state)=>state["Home"]["experience"]);
const experienceIoProps = useIoStore((state)=>state["Home"]["experience"]);
const experienceCb = useexperienceCb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const faqHeadingProps = useStore((state)=>state["Home"]["faqHeading"]);
const faqHeadingIoProps = useIoStore((state)=>state["Home"]["faqHeading"]);
const faqHeadingCb = usefaqHeadingCb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const RighttextProps = useStore((state)=>state["Home"]["Righttext"]);
const RighttextIoProps = useIoStore((state)=>state["Home"]["Righttext"]);
const RighttextCb = useRighttextCb()
const ProdDesProps = useStore((state)=>state["Home"]["ProdDes"]);
const ProdDesIoProps = useIoStore((state)=>state["Home"]["ProdDes"]);
const ProdDesCb = useProdDesCb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const Link53Props = useStore((state)=>state["Home"]["Link53"]);
const Link53IoProps = useIoStore((state)=>state["Home"]["Link53"]);
const Link53Cb = useLink53Cb()

  return (<>
  <Flex className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Flex className="p-Home navbarFlex bpt" {...navbarFlexProps} {...navbarFlexCb} {...navbarFlexIoProps}>
<Flex className="p-Home logo_flex bpt" {...logo_flexProps} {...logo_flexCb} {...logo_flexIoProps}>
<Link className="p-Home Link50 bpt" {...Link50Props} {...Link50Cb} {...Link50IoProps}/>
<TextBox className="p-Home Dot bpt" {...DotProps} {...DotCb} {...DotIoProps}/>
</Flex>
<Flex className="p-Home NavLinks bpt" {...NavLinksProps} {...NavLinksCb} {...NavLinksIoProps}>
<Link className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<Link className="p-Home services bpt" {...servicesProps} {...servicesCb} {...servicesIoProps}/>
<Link className="p-Home projects bpt" {...projectsProps} {...projectsCb} {...projectsIoProps}/>
<Link className="p-Home Blog bpt" {...BlogProps} {...BlogCb} {...BlogIoProps}/>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Link className="p-Home Booking bpt" {...BookingProps} {...BookingCb} {...BookingIoProps}/>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Hero bpt" {...HeroProps} {...HeroCb} {...HeroIoProps}>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Flex className="p-Home Hero1 bpt" {...Hero1Props} {...Hero1Cb} {...Hero1IoProps}>
<Div className="p-Home heading bpt" {...headingProps} {...headingCb} {...headingIoProps}>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Div>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox className="p-Home subhead bpt" {...subheadProps} {...subheadCb} {...subheadIoProps}/>
</Div>
<Flex className="p-Home submitCV bpt" {...submitCVProps} {...submitCVCb} {...submitCVIoProps}>
<Flex className="p-Home Buttons bpt" {...ButtonsProps} {...ButtonsCb} {...ButtonsIoProps}>
<Div className="p-Home upBtn bpt" {...upBtnProps} {...upBtnCb} {...upBtnIoProps}>
<TextBox className="p-Home BookCall bpt" {...BookCallProps} {...BookCallCb} {...BookCallIoProps}/>
</Div>
<Div className="p-Home dwnBtn bpt" {...dwnBtnProps} {...dwnBtnCb} {...dwnBtnIoProps}>
<TextBox className="p-Home TalkNow bpt" {...TalkNowProps} {...TalkNowCb} {...TalkNowIoProps}/>
</Div>
</Flex>
<Flex className="p-Home DownloadCV bpt" {...DownloadCVProps} {...DownloadCVCb} {...DownloadCVIoProps}>
<Link className="p-Home dcv bpt" {...dcvProps} {...dcvCb} {...dcvIoProps}/>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Hero2 bpt" {...Hero2Props} {...Hero2Cb} {...Hero2IoProps}>
<Image className="p-Home Photo bpt" {...PhotoProps} {...PhotoCb} {...PhotoIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Trused bpt" {...TrusedProps} {...TrusedCb} {...TrusedIoProps}>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Flex className="p-Home TrustedBy bpt" {...TrustedByProps} {...TrustedByCb} {...TrustedByIoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<Flex className="p-Home comp bpt" {...compProps} {...compCb} {...compIoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home ServiceFlex bpt" {...ServiceFlexProps} {...ServiceFlexCb} {...ServiceFlexIoProps}>
<Flex className="p-Home ServiceHead bpt" {...ServiceHeadProps} {...ServiceHeadCb} {...ServiceHeadIoProps}>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ServiceBody bpt" {...ServiceBodyProps} {...ServiceBodyCb} {...ServiceBodyIoProps}>
<Flex className="p-Home Card1 bpt" {...Card1Props} {...Card1Cb} {...Card1IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Card2 bpt" {...Card2Props} {...Card2Cb} {...Card2IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Flex>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Card3 bpt" {...Card3Props} {...Card3Cb} {...Card3IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Flex className="p-Home ProjectHero bpt" {...ProjectHeroProps} {...ProjectHeroCb} {...ProjectHeroIoProps}>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home projHead bpt" {...projHeadProps} {...projHeadCb} {...projHeadIoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
<Flex className="p-Home projButtons bpt" {...projButtonsProps} {...projButtonsCb} {...projButtonsIoProps}>
<Div className="p-Home PupBtn bpt" {...PupBtnProps} {...PupBtnCb} {...PupBtnIoProps}>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
</Div>
<Div className="p-Home Pdwnbtn bpt" {...PdwnbtnProps} {...PdwnbtnCb} {...PdwnbtnIoProps}>
<TextBox className="p-Home ViewProj bpt" {...ViewProjProps} {...ViewProjCb} {...ViewProjIoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex className="p-Home Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex className="p-Home Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Flex className="p-Home proj1MainImgF bpt" {...proj1MainImgFProps} {...proj1MainImgFCb} {...proj1MainImgFIoProps}>
<Div className="p-Home projImgHolder1 bpt" {...projImgHolder1Props} {...projImgHolder1Cb} {...projImgHolder1IoProps}>
<Image className="p-Home pImage1 bpt" {...pImage1Props} {...pImage1Cb} {...pImage1IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<TextBox className="p-Home projHead1 bpt" {...projHead1Props} {...projHead1Cb} {...projHead1IoProps}/>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<Flex className="p-Home Flex209 bpt" {...Flex209Props} {...Flex209Cb} {...Flex209IoProps}>
<Link className="p-Home proj1 bpt" {...proj1Props} {...proj1Cb} {...proj1IoProps}/>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex213 bpt" {...Flex213Props} {...Flex213Cb} {...Flex213IoProps}>
<Flex className="p-Home proj2MainImgF bpt" {...proj2MainImgFProps} {...proj2MainImgFCb} {...proj2MainImgFIoProps}>
<Div className="p-Home projImgHolder2 bpt" {...projImgHolder2Props} {...projImgHolder2Cb} {...projImgHolder2IoProps}>
<Image className="p-Home pImage2 bpt" {...pImage2Props} {...pImage2Cb} {...pImage2IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex211 bpt" {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<TextBox className="p-Home projHead2 bpt" {...projHead2Props} {...projHead2Cb} {...projHead2IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<Flex className="p-Home Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<Link className="p-Home proj2 bpt" {...proj2Props} {...proj2Cb} {...proj2IoProps}/>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex217 bpt" {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<Flex className="p-Home projMainImgF bpt" {...projMainImgFProps} {...projMainImgFCb} {...projMainImgFIoProps}>
<Div className="p-Home projImgHolder3 bpt" {...projImgHolder3Props} {...projImgHolder3Cb} {...projImgHolder3IoProps}>
<Image className="p-Home pImage3 bpt" {...pImage3Props} {...pImage3Cb} {...pImage3IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex215 bpt" {...Flex215Props} {...Flex215Cb} {...Flex215IoProps}>
<TextBox className="p-Home projHead3 bpt" {...projHead3Props} {...projHead3Cb} {...projHead3IoProps}/>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<Flex className="p-Home Flex214 bpt" {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<Link className="p-Home proj3 bpt" {...proj3Props} {...proj3Cb} {...proj3IoProps}/>
<Image className="p-Home Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex222 bpt" {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Flex className="p-Home Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Flex>
<Flex className="p-Home Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Blogs bpt" {...BlogsProps} {...BlogsCb} {...BlogsIoProps}>
<Flex className="p-Home BlogsBody bpt" {...BlogsBodyProps} {...BlogsBodyCb} {...BlogsBodyIoProps}>
<Flex className="p-Home LeftHeading bpt" {...LeftHeadingProps} {...LeftHeadingCb} {...LeftHeadingIoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Link className="p-Home Link20 bpt" {...Link20Props} {...Link20Cb} {...Link20IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home RightArticles bpt" {...RightArticlesProps} {...RightArticlesCb} {...RightArticlesIoProps}>
<Flex className="p-Home Articles bpt" {...ArticlesProps} {...ArticlesCb} {...ArticlesIoProps}>
<Flex className="p-Home ArticleBody2 bpt" {...ArticleBody2Props} {...ArticleBody2Cb} {...ArticleBody2IoProps}>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Link className="p-Home Link18 bpt" {...Link18Props} {...Link18Cb} {...Link18IoProps}/>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}/>
</Flex>
<Flex className="p-Home ArticlesBody bpt" {...ArticlesBodyProps} {...ArticlesBodyCb} {...ArticlesBodyIoProps}>
<Flex className="p-Home DateMin bpt" {...DateMinProps} {...DateMinCb} {...DateMinIoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
<TextBox className="p-Home Heading bpt" {...HeadingProps} {...HeadingCb} {...HeadingIoProps}/>
<Flex className="p-Home ReadBlog bpt" {...ReadBlogProps} {...ReadBlogCb} {...ReadBlogIoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Link className="p-Home Link19 bpt" {...Link19Props} {...Link19Cb} {...Link19IoProps}/>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}/>
</Flex>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Link className="p-Home Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}/>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Flex>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Link className="p-Home Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Aboutme bpt" {...AboutmeProps} {...AboutmeCb} {...AboutmeIoProps}>
<Flex className="p-Home AboutHero bpt" {...AboutHeroProps} {...AboutHeroCb} {...AboutHeroIoProps}>
<Flex className="p-Home LeftHead bpt" {...LeftHeadProps} {...LeftHeadCb} {...LeftHeadIoProps}>
<TextBox className="p-Home ProdDes bpt" {...ProdDesProps} {...ProdDesCb} {...ProdDesIoProps}/>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex>
<Flex className="p-Home Righthead bpt" {...RightheadProps} {...RightheadCb} {...RightheadIoProps}>
<TextBox className="p-Home Righttext bpt" {...RighttextProps} {...RighttextCb} {...RighttextIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home AboutImages bpt" {...AboutImagesProps} {...AboutImagesCb} {...AboutImagesIoProps}>
<Div className="p-Home img1 bpt" {...img1Props} {...img1Cb} {...img1IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Div>
<Div className="p-Home Img2 bpt" {...Img2Props} {...Img2Cb} {...Img2IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Div>
<Flex className="p-Home Fimg3 bpt" {...Fimg3Props} {...Fimg3Cb} {...Fimg3IoProps}>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Experiencebox bpt" {...ExperienceboxProps} {...ExperienceboxCb} {...ExperienceboxIoProps}>
<Flex className="p-Home expMain bpt" {...expMainProps} {...expMainCb} {...expMainIoProps}>
<Flex className="p-Home expLeft bpt" {...expLeftProps} {...expLeftCb} {...expLeftIoProps}>
<Flex className="p-Home leftHead bpt" {...leftHeadProps} {...leftHeadCb} {...leftHeadIoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Flex>
<Flex className="p-Home colleges bpt" {...collegesProps} {...collegesCb} {...collegesIoProps}>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Flex className="p-Home college1 bpt" {...college1Props} {...college1Cb} {...college1IoProps}>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Flex>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Flex>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}/>
</Flex>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Flex>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}/>
</Flex>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home exptRight bpt" {...exptRightProps} {...exptRightCb} {...exptRightIoProps}>
<Flex className="p-Home rightHead bpt" {...rightHeadProps} {...rightHeadCb} {...rightHeadIoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Flex>
<Flex className="p-Home companies bpt" {...companiesProps} {...companiesCb} {...companiesIoProps}>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}/>
</Flex>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}/>
</Flex>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Testimonials bpt" {...TestimonialsProps} {...TestimonialsCb} {...TestimonialsIoProps}>
<Flex className="p-Home TestiMain bpt" {...TestiMainProps} {...TestiMainCb} {...TestiMainIoProps}>
<Flex className="p-Home testihead bpt" {...testiheadProps} {...testiheadCb} {...testiheadIoProps}>
<TextBox className="p-Home testiheading bpt" {...testiheadingProps} {...testiheadingCb} {...testiheadingIoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex>
<Flex className="p-Home testiContent bpt" {...testiContentProps} {...testiContentCb} {...testiContentIoProps}>
<Flex className="p-Home TestiImg bpt" {...TestiImgProps} {...TestiImgCb} {...TestiImgIoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Flex>
<Flex className="p-Home testiRight bpt" {...testiRightProps} {...testiRightCb} {...testiRightIoProps}>
<Flex className="p-Home trTop bpt" {...trTopProps} {...trTopCb} {...trTopIoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
</Flex>
<Flex className="p-Home trBottom bpt" {...trBottomProps} {...trBottomCb} {...trBottomIoProps}>
<Flex className="p-Home Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Flex>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FAQ bpt" {...FAQProps} {...FAQCb} {...FAQIoProps}>
<Flex className="p-Home faqHead bpt" {...faqHeadProps} {...faqHeadCb} {...faqHeadIoProps}>
<TextBox className="p-Home faqHeading bpt" {...faqHeadingProps} {...faqHeadingCb} {...faqHeadingIoProps}/>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Flex>
<Flex className="p-Home faqs bpt" {...faqsProps} {...faqsCb} {...faqsIoProps}>
<Flex className="p-Home faqsLeft bpt" {...faqsLeftProps} {...faqsLeftCb} {...faqsLeftIoProps}>
<Flex className="p-Home Faq1 bpt" {...Faq1Props} {...Faq1Cb} {...Faq1IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
<Flex className="p-Home Faq2 bpt" {...Faq2Props} {...Faq2Cb} {...Faq2IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
</Flex>
<Flex className="p-Home Faq3 bpt" {...Faq3Props} {...Faq3Cb} {...Faq3IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
</Flex>
<Flex className="p-Home Faq4 bpt" {...Faq4Props} {...Faq4Cb} {...Faq4IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home faqsRight bpt" {...faqsRightProps} {...faqsRightCb} {...faqsRightIoProps}>
<Flex className="p-Home faq5 bpt" {...faq5Props} {...faq5Cb} {...faq5IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
<Flex className="p-Home Faq6 bpt" {...Faq6Props} {...Faq6Cb} {...Faq6IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
<Flex className="p-Home Faq8 bpt" {...Faq8Props} {...Faq8Cb} {...Faq8IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
<Flex className="p-Home Faq9 bpt" {...Faq9Props} {...Faq9Cb} {...Faq9IoProps}>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home faqContact bpt" {...faqContactProps} {...faqContactCb} {...faqContactIoProps}>
<Flex className="p-Home contactHeading bpt" {...contactHeadingProps} {...contactHeadingCb} {...contactHeadingIoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<Flex className="p-Home contactHeadColor bpt" {...contactHeadColorProps} {...contactHeadColorCb} {...contactHeadColorIoProps}>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home links bpt" {...linksProps} {...linksCb} {...linksIoProps}>
<Flex className="p-Home contactMe bpt" {...contactMeProps} {...contactMeCb} {...contactMeIoProps}>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Flex className="p-Home Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home contactLinks bpt" {...contactLinksProps} {...contactLinksCb} {...contactLinksIoProps}>
<Flex className="p-Home Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<Link className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}/>
<Link className="p-Home contact bpt" {...contactProps} {...contactCb} {...contactIoProps}/>
<Link className="p-Home dribbble bpt" {...dribbbleProps} {...dribbbleCb} {...dribbbleIoProps}/>
</Flex>
<Flex className="p-Home Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Link className="p-Home ervices bpt" {...ervicesProps} {...ervicesCb} {...ervicesIoProps}/>
<Link className="p-Home blog bpt" {...blogProps} {...blogCb} {...blogIoProps}/>
<Link className="p-Home insta bpt" {...instaProps} {...instaCb} {...instaIoProps}/>
</Flex>
<Flex className="p-Home Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<Link className="p-Home experience bpt" {...experienceProps} {...experienceCb} {...experienceIoProps}/>
<Link className="p-Home project bpt" {...projectProps} {...projectCb} {...projectIoProps}/>
<Link className="p-Home Link47 bpt" {...Link47Props} {...Link47Cb} {...Link47IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Link className="p-Home Link40 bpt" {...Link40Props} {...Link40Cb} {...Link40IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Link className="p-Home Link39 bpt" {...Link39Props} {...Link39Cb} {...Link39IoProps}/>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<Link className="p-Home Link35 bpt" {...Link35Props} {...Link35Cb} {...Link35IoProps}/>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<Link className="p-Home Link36 bpt" {...Link36Props} {...Link36Cb} {...Link36IoProps}/>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<Link className="p-Home Link38 bpt" {...Link38Props} {...Link38Cb} {...Link38IoProps}/>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Link className="p-Home Link37 bpt" {...Link37Props} {...Link37Cb} {...Link37IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
<Link className="p-Home Link53 bpt" {...Link53Props} {...Link53Cb} {...Link53IoProps}/>
</Flex>
  </>);
}
