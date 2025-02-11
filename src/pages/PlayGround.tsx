import React from 'react';
import TopBar from '../components/TopBar';
import PlaygroundIcon from '../components/Icons/PlaygroundIcon';
import SearchIcon from '../components/Icons/SearchIcon';
import PlayGroundCard from './../components/playground/Card';
import RightArrowIcon from './../components/Icons/RightArrowIcon';
import GeneratorIcon from '../components/Icons/GeneratorIcon';
import ElixirIcon from '../components/Icons/ElixirIcon';
import GoldIcon from '../components/Icons/GoldIcon';
import OracleIcon from '../components/Icons/OracleIcon';
import ExtenderIcon from '../components/Icons/ExtenderIcon';
import PredictorIcon from '../components/Icons/PredictorIcon';

const PlayGround: React.FC = () => {
  return (
    <div className="">
      <TopBar containerClassName="flex items-center gap-3 justify-between rounded-bl-[30px] rounded-br-[30px]  border-none px-4 py-6 shadow-playground">
        <div>
          <h2 className="text-[26px] font-primary font-medium">
            Welcome Wood!
          </h2>
          <div className="flex items-center gap-1 text-[#414042] text-sm font-primary ">
            <PlaygroundIcon className="stroke-[#414042] w-[12px] h-[12px] font-light" />
            <p>{0} projects</p>
          </div>
        </div>
        <div className="relative">
          <button className="absolute top-[11.5px] left-[9px]">
            <SearchIcon className="stroke-[#BCBEC0] w-[16px] h-[16px]" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="outline-none border border-[#BCBEC0] rounded-[40px] w-[300px] pl-8 pr-4 py-2 text-[#BCBEC0] text-sm placeholder:text-[#BCBEC0]"
          />
        </div>
      </TopBar>

      <div className="flex items-center justify-between gap-6 px-2 py-6">
        <div>
          <h2 className="text-[26px] font-primary font-medium">Get Started</h2>
          <p className="text-[#414042] text-sm font-primary">
            Choose a pre configured blueprint that matches your use case.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-default underline text-sm font-medium font-primary">
            See all blueprints
          </button>
          <button className="p-2.5 bg-default rounded-full flex items-center gap-2">
            <RightArrowIcon className="stroke-white w-[16px] h-[16px]" />
          </button>
        </div>
      </div>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 md:mt-8 mt-4">
        <PlayGroundCard
          primaryColor="#c32782"
          secondaryColor="#5183F0"
          model={'The Extender'}
          title={'Merlin Generator'}
          description={
            'Generates unlimited data in just seconds with good quality.'
          }
          modelIcon={
            <GeneratorIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          openModel={() => {
            // Use model Logic
          }}
        />
        <PlayGroundCard
          primaryColor="#1E647F"
          secondaryColor="#5183F0"
          model={'The Extender'}
          title={'Gold Generator'}
          description={
            'Generates 200 entries in a very short time and with great quality'
          }
          modelIcon={
            <GoldIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          openModel={() => {
            // Use model Logic
          }}
        />
        <PlayGroundCard
          primaryColor="#A077A8"
          secondaryColor="#5183F0"
          model={'The Extender'}
          title={'Elixir Generator'}
          description={
            'Generates 50 entries of perfect quality and with a great relationship between variables'
          }
          modelIcon={
            <ElixirIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          openModel={() => {
            // Use model Logic
          }}
        />
        <PlayGroundCard
          primaryColor="#59B1FE"
          secondaryColor="#5183F0"
          model={'The Extender'}
          title={'Oracle Generator'}
          description={
            'Generates 25 entries on recent and real information in just seconds'
          }
          modelIcon={
            <OracleIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          openModel={() => {
            // Use model Logic
          }}
        />
        <PlayGroundCard
          primaryColor="#4CB448"
          secondaryColor="#5183F0"
          model={'The Extender'}
          title={'The Extender'}
          description={
            'Extends files, documents and entries, simply provide the documents you want to extend and wait for our tools to do their magic'
          }
          modelIcon={
            <ExtenderIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          openModel={() => {
            // Use model Logic
          }}
        />

        <PlayGroundCard
          primaryColor="#E55057"
          secondaryColor="#5183F0"
          model={'The Predictor'}
          title={'The Predictor'}
          description={`Predicts data and information from files and previous documentation, choose what you want to obtain and what variables you want to use, don't wait any longer and start predicting`}
          modelIcon={
            <PredictorIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          openModel={() => {
            // Use model Logic
          }}
        />
      </section>
    </div>
  );
};

export default PlayGround;
