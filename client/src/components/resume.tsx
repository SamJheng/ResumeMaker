import { useTranslation } from "react-i18next";
import Banner from "./banner";
import { Trans } from 'react-i18next';
import Avatars from "./avatars";
import { CiMail, CiMap } from "react-icons/ci";
import SkillItem from "./skill-item";
import { FaAngular, FaAws, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaJenkins, FaNode, FaReact, FaYarn } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import Section from "./section";
import photo from '../assets/photo.jpg';
export function Resume() {
  const { t } = useTranslation();
  const iTrustWellnessGroupDescriptions = t('workExperience.iTrustWellnessGroup.description', { returnObjects: true }) as {
    title: string;
    body: string;
  }[];
  const ULICTekIncDescriptions = t('workExperience.ULICTekInc.description', { returnObjects: true }) as {
    title: string;
    body: string;
  }[];
  const FootprintKuDescriptions = t('workExperience.FootprintKu.description', { returnObjects: true }) as {
    title: string;
    body: string;
  }[];
  const summaryDescriptions = t('summary.description',{returnObjects: true}) as string[]
  return (
    <>
      <Banner>
        <Section>
          <div className="flex flex-col xl:flex-row">
            <div className="flex-1 flex justify-center items-center flex-col mb-4 xl:mb-0">
              <Avatars srcUrl={photo}>
              </Avatars>
              <h3 className="text-2xl font-semibold mt-4">{t('fullName')}</h3>
              <h3 className="text-lg font-semibold mt-1">{t('jobTitle')}</h3>
              <div className="mt-1 flex items-center">
                <CiMail />
                <span className="ml-2">m3gl4a@gmail.com</span>
              </div>
              <div className="mt-1 font-semibold flex items-center"> 
                <CiMap /> 
                <span className="ml-2">Kaohsiung City, Taiwan</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-4">{t('summary.title')}</h3>
              {summaryDescriptions.map((item,index)=>(<p className="mb-1" key={index}>{item}</p>))}
            </div>
          </div>
        </Section>
        
      </Banner>
      <Section>
        <div>
          <p className="mb-4 font-bold text-3xl">Skills</p>
          <p className="mb-1 font-bold text-xl">Tech Stack</p>
        </div>
        <div className="flex flex-wrap">
          <SkillItem>
            <FaReact size={24}/>
            <span className="mx-1">React</span>
          </SkillItem>
          <SkillItem>
            <FaNode size={24}/>
            <span className="mx-1"> Node.js</span>
          </SkillItem>
          <SkillItem>
            <FaDocker size={24}/>
            <span className="mx-1"> Docker </span>
          </SkillItem>
          <SkillItem>
            <FaAws size={24}/>
            <span className="mx-1"> AWS </span>
          </SkillItem>
          <SkillItem>
            <FaJenkins size={24}/>
            <span className="mx-1"> Jenkins </span>
          </SkillItem>
          <SkillItem>
            <FaAngular size={24}/>
            <span className="mx-1"> Angular </span>
          </SkillItem>
          <SkillItem>
            <FaHtml5 size={24}/>
            <span className="mx-1"> Html5 </span>
          </SkillItem>
          <SkillItem>
            <AiOutlineDotNet />
            <span className="mx-1"> C# </span>
          </SkillItem>
          <SkillItem>
            <DiPostgresql size={24}/>
            <span className="mx-1"> PostgreSQL </span>
          </SkillItem>
          <SkillItem>
            <FaGithub size={24}/>
            <span className="mx-1"> Git </span>
          </SkillItem>
          <SkillItem>
            <SiNestjs size={24}/>
            <span className="mx-1"> NestJs with Express </span>
          </SkillItem>
          <SkillItem>
            <IoLogoElectron size={24}/>
            <span className="mx-1">Electron</span>
          </SkillItem>
          <SkillItem>
            <FaCss3Alt size={24}/>
            <span className="mx-1">CSS3</span>
          </SkillItem>
          <SkillItem>
            <FaYarn size={24}/>
            <span className="mx-1">Yarn</span>
          </SkillItem>
           
        </div>
      </Section>
      <Section>
        <div className="border-dashed border-b-2">
          <p className="mb-4 font-bold text-3xl">Work Experience</p>
        </div>
        <div className="flex p-5 flex-col xl:flex-row" >
          <div className="flex-1 flex items-center flex-col">
            {/* <div className="mb-4"><FaBluetooth size={40}/></div> */}
            <h3 className="text-2xl font-semibold mb-2">{t('workExperience.iTrustWellnessGroup.companyName')}</h3>
            <h3 className="text-xl font-semibold mb-2">{t('workExperience.iTrustWellnessGroup.title')}</h3>
            <h3 className="font-semibold text-gray-600 mb-2">{t('workExperience.iTrustWellnessGroup.local')}</h3>
            <h3 className="font-semibold text-gray-600 mb-2">{t('workExperience.iTrustWellnessGroup.workDayRange')}</h3>
          </div>
          <div className="flex-1">
            {iTrustWellnessGroupDescriptions.map((item, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-bold mb-1 text-lg">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex p-5 flex-col xl:flex-row" >
          <div className="flex-1 flex  items-center flex-col">
            <h3 className="text-2xl font-semibold mb-2">{t('workExperience.ULICTekInc.companyName')}</h3>
            <h3 className="text-xl font-semibold mb-2">{t('workExperience.ULICTekInc.title')}</h3>
            <h3 className="font-semibold text-gray-600 mb-2">{t('workExperience.ULICTekInc.local')}</h3>
            <h3 className="font-semibold text-gray-600 mb-2">{t('workExperience.ULICTekInc.workDayRange')}</h3>
          </div>
          <div className="flex-1">
            {ULICTekIncDescriptions.map((item, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-bold mb-1 text-lg">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex p-5 flex-col xl:flex-row" >
          <div className="flex-1 flex  items-center flex-col">
            <h3 className="text-2xl font-semibold mb-2">{t('workExperience.FootprintKu.companyName')}</h3>
            <h3 className="text-xl font-semibold mb-2">{t('workExperience.FootprintKu.title')}</h3>
            <h3 className="font-semibold text-gray-600 mb-2">{t('workExperience.FootprintKu.local')}</h3>
            <h3 className="font-semibold text-gray-600 mb-2">{t('workExperience.FootprintKu.workDayRange')}</h3>
          </div>
          <div className="flex-1">
            {FootprintKuDescriptions.map((item, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-bold mb-1 text-lg">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="border-dashed border-b-2">
          <p className="mb-4 font-bold text-3xl">Educational background</p>
        </div>
        <div className="p-5" >
          <h3 className="text-2xl font-semibold mb-2">{t('educationalBackground.name')}</h3>
          <h3 className="text-xl font-semibold mb-2">{t('educationalBackground.title')}</h3>
          <h3 className="font-semibold text-gray-600 mb-2">{t('educationalBackground.dayRange')}</h3>
        </div>
      </Section>
    </>
  );
}