import Layout from "../components/layout";

import BarChartComponent from "../components/charts/assets-bar";
import ActiveAddressesLineChart from "../components/charts/bitcoin-mining-line";
import LineChartComponent from "../components/charts/trends-line";
import Chart from "../components/charts/btc-price";
import Image from "next/image";
import { FaBitcoin } from "react-icons/fa";

import { PiFinnTheHuman } from "react-icons/pi";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout>
      <div className="flex flex-col w-screen justify-center items-center py-10">
        <div className="flex w-full justify-center">
          <Image width={340} height={340} src={"/img/btc-logo.jpeg"} />
        </div>

        <div className="divider"></div>
        <article className=" prose-xl w-1/2">
          <h1 className="font-bold font-anta text-6xl">
            How Bitcoin Took Over the World
          </h1>

          <h4 className="font-anta text-gray-400 ">
            Examining the evolution of Bitcoin through a coming of age story and
            lots of data!
          </h4>

          <div className="flex flex-row justify-between items-center">

            <div className = "flex flex-row items-center">
            <h6 className="font-anta">By: Evan Moore</h6>

            <PiFinnTheHuman size={20} color="#f7931a" className="ml-4" />
              </div>
            <h6 className="font-anta text-gray-400">5/1/2024</h6>
          </div>

          <div className="divider"></div>

          <div className="flex flex-row justify-between items-center">
            <h3 className="font-anta">What is Bitcoin?</h3>

            <div className=" mt-6 ">
              <PiFinnTheHuman size={60} color="#f7931a" />
            </div>
          </div>

          <p className=" font-light leading-10 text-lg     ">
            {/**
             * When I discovered bitcoin, my first thoughts, etc...
             *
             *
             */}
            I first discovered Bitcoin in 2017 after it's first large price
            movement - Bitcoin went from $1,000 to $19,000 in nine months. I,
            like many people, wasn't allured by the underlying technology or
            utility of Bitcoin, but by the absurd price movement. In 2017 I was
            a sophomore in high school and although I tried to understand
            Bitcoin, when someone asked me about it all I could say about it was
            “Uhh it’s decentralized, and uses blockchain technology”, of course,
            I didn't understand what these technical terms meant. However, I
            continued to explore Bitcoin and cryptocurrencies in general, and as
            I did so I became even more invested in it (not literally, I didn't
            have any money) and more confused.
          </p>

          <p className=" font-light leading-10 text-lg    ">
            To me, Bitcoin being decentralized meant that no one controlled it
            and blockchain technology was a new way of storing data that
            prevents people from hacking it. There is a lot more to both of
            these concepts, but this generally is correct. I also found the
            concept of Bitcoin mining very interesting. I envisioned computers
            in mines on the internet searching for Bitcoins like they were
            diamonds or gold.
          </p>

          <div className="divider"></div>

          <div className="flex w-full justify-center">
            <Image width={400} height={400} src={"/img/blockchain.png"} />
          </div>

          <div className="divider"></div>

          {/**
           * General definition
           *
           *  - Why it's useful
           *  - Peel the onion of what it does
           *
           *  - Mining
           *  - Exchanges
           *  - Leading the industry, market share
           */}

          <p className=" font-light leading-10 text-lg    ">
            Bitcoin is a decentralized digital currency that operates on a
            peer-to-peer network. In other words, Bitcoin operates without a
            central authority, such as a government or financial institution,
            and transactions are directly conducted between users on the
            network.
          </p>

          <p className=" font-light leading-10 text-lg    ">
            Transactions made on the peer-to-peer network are recorded on a
            distributed ledger. The distributed ledger is made up of blocks that
            contain batches of transactions that are all verified by Bitcoin
            miners. Blocks are immutable and appended onto each other
            chronologically, thus forming a blockchain.
          </p>

          <p className=" font-light leading-10 text-lg    ">
            The blockchain ensures the integrity of transactions, no double
            payments, and consensus among network participants without a central
            authority. Additionally, it facilitates the verification of
            ownership and the transfer of digital assets like Bitcoin securely
            and efficiently. Bitcoin uses a proof-of-work consensus mechanism.
            This means miners compete to solve complex mathematical puzzles to
            validate transactions and create new blocks on the blockchain. When
            a miner successfully validates a transaction, it receives a Bitcoin
            as a reward.
          </p>

          <p className=" font-light leading-10 text-lg    ">
            There are a limited number of Bitcoins (21 million) and scheduled
            halving events that occur after a certain number of Bitcoins has
            been mined. After these events, the rewards for miners are cut in
            half, effectively making Bitcoin more scarce. Bitcoin technology is
            extremely transformative and has lots of potential to change how
            currency is used across the world, but Bitcoin gained popularity
            because of wealth creation.
          </p>

          <div className="divider"></div>

          <h3 className="font-anta">Wealth Creation</h3>

          {/**
           *
           *
           *
           *
           * How much Bitcoin grew,
           *
           * General wealth creation
           * Loads of discord groups, Bitcoin Millionaires
           * Bitcoin is all over social media
           *
           *
           *
           *
           */}

          <p className=" font-light leading-10 text-lg    ">
            {/**
             *
             *
             * General Bitcoin View
             *
             *
             */}
            Bitcoin's exponential growth in value has transformed the fortunes
            of many early investors, propelling them into the ranks of
            billionaires and millionaires. The now legendary Bitcoin Pizza
            story, where Laszlo Hanyecz famously exchanged 10,000 bitcoins for
            two Papa John's pizzas in 2010, underscores the staggering
            appreciation of Bitcoin's worth over the years. At that time, when
            Bitcoin was valued at less than a cent per coin, few could have
            predicted its meteoric rise to around $60,000 per coin today.
          </p>

          <p className=" font-light leading-10 text-lg    ">
            As shown in the chart above, Bitcoin's price has climbed to
            astronomical levels since it inception, and many investors found was
            to capitalize. This unprecedented wealth generation has not only
            captured the attention of financial markets but has also sparked a
            frenzy of interest among the general public. Discord groups and
            online communities dedicated to Bitcoin abound, where members
            proudly share their success stories and discuss investment
            strategies. Moreover, Bitcoin's prominence on social media platforms
            has further fueled its popularity, cementing its status as a symbol
            of wealth creation and financial opportunity in the digital age.
          </p>

          <div className="divider"></div>

          {/**
           *
           *
           * Bitcoin Price Chart
           *
           *
           *
           *
           */}

          <Image height={2000} width={2000} src={"/img/btc-wealth.png"} />

          <div className="divider"></div>

          {/**
           *
           * My Bitcoin View on Wealth Creation
           *       * Once i discovered Bitcoin I was interested, but not hooked.
           *
           * However the proliferation of other cryptocurrencies, etc...
           * NFT's, peaked my interest.
           *
           * Bitcoin price dropped, so did my interest
           *
           * With each interation of massive price spikes, Bitcoin popularity continues to grow
           *
           *
           */}

          <div className="flex w-full justify-end">
            <PiFinnTheHuman size={60} color="#f7931a" />
          </div>

          <p className=" font-light leading-10 text-lg     mt-2">
            As I previously mentioned, I too was entranced by the meteoric rise
            of Bitcoin. So I bought some, and I, like many others, bought at the
            peak, and by 2019 was down over 60% from my initial investment. So I
            took my losses and forgot all about Bitcoin. Bitcoin is not a
            one-sided story, lots of people have lost significant amounts of
            money. However, Bitcoin is like a rubber duck in a bathtub; no
            matter how many times it goes under, it keeps popping back up.
          </p>

          <div className="divider"></div>

          <h3 className="font-anta">Bitcoin's Rise in Popularity</h3>

          <p className=" font-light leading-10 text-lg    ">
            Taking a step back, how did Bitcoin gain enough popularity to reach
            its high in 2018? Since its creation by the anonymous Satoshi
            Nakamoto in 2009, Bitcoin initially garnered attention from tech
            enthusiasts and early adopters. However, its utility remained
            limited until more individuals began mining it, expanding the
            network and driving interest. The emergence of the Silk Road in
            2011, an online marketplace notorious for facilitating illegal
            transactions, played a pivotal role in Bitcoin's journey, as it
            became a platform for buying and selling illicit goods. This
            notoriety propelled Bitcoin into the mainstream consciousness.
          </p>

          <p className=" font-light leading-10 text-lg          ">
            {/**
             *
             * How Bitcoin rose to popularity: Silk road, memecoins, NFTs, promise of wealth creation => pivot this into how my interest grew
             *
             */}
            Subsequently, investment funds took notice of its potential, further
            fueling its legitimacy by the early 2010s. From 2013 to 2015, lots
            of new cryptocurrencies were minted (DogeCoin: 2013, Ripple: 2013,
            Ethereum: 2015), each with its unique utilities, and ultimately
            continuing to spread the popularity of Bitcoin. However, the massive
            price movement from 2016 to 2017 catapulted Bitcoin into the
            spotlight, attracting widespread attention and speculation. From
            2017 to 2020, the introduction of meme coins, non-fungible tokens
            (NFTs), and the influence of social media further amplified
            Bitcoin's traction, with influencers promising a potential for
            wealth creation.
          </p>

          <p className=" font-light leading-10 text-lg          ">
            The COVID-19 pandemic in 2020 provided another catalyst for
            Bitcoin's popularity. People were stuck indoors with stimulus checks
            and found Bitcoin appealing. Since then, the crypto landscape has
            continued to evolve rapidly, with the introduction of more
            cryptocurrencies, the rise of NFTs and social media engagement, and
            growing institutional adoption, all contributing to Bitcoin's
            enduring appeal and widespread adoption.
          </p>

          <p className=" font-light leading-10 text-lg          ">
            As you can see in the chart below showing Google searches for
            Bitcoin and Gold, Bitcoin interest is now reaching record levels,
            and will soon surpass gold.
          </p>

          <div className="divider"></div>

          {/**
           *
           *
           * GOOGLE TRENDS CHART
           *
           *
           *
           */}

          <Image height={2000} width={2000} src={"/img/g-trends.png"} />

          <div className="divider"></div>

          <div className="flex w-full justify-end">
            <PiFinnTheHuman size={60} color="#f7931a" />
          </div>

          <p className=" font-light leading-10 text-lg     ">
            {/**
             *
             * My perception of the wealth creation, why my interest dropped, why its spiking,
             *
             * Pivot into the rest of the world, and mining
             *
             */}
            Following the Bitcoin drop in 2018 I had not thought about Bitcoin
            until COVID-19 hit. Simutaneoulsy Bitcoin price shot up and I was
            left in the dust again. However, this time I told myself I would buy
            and hold. That did not happen, and I sold shorty after buying. But
            two new interest of mine quickly arose: NFT's and memecoins. Both
            inherently hold no value and provide no utility, but they are so
            cool!
          </p>

          <p className=" font-light leading-10 text-lg    ">
            Finally, Bitcoin price receeded again in 2021 and 2022 and I lost
            all interest again... that is until the most recent pop!! \t New
            paragraph While retail investors played with their memecoins, NFT's,
            and other cryptocurrencies from 2012-now, Bitcoin miners slowly grew
            their arsenals of computers across the world.
          </p>

          <div className="divider"></div>

          <h3 className="font-anta">Bitcoin Mining</h3>

          <div className="divider"></div>

          {/**
           *
           *
           * Bitcoin Mining Chart
           *
           *
           *
           */}

          <Image height={2000} width={2000} src={"/img/map.png"} />

          <div className="divider"></div>

          <p className=" font-light leading-10 text-lg          ">
            {/**
             *
             *
             *
             * Continued discussion on the Halving
             *
             * Commentary on the chart
             *
             *
             * How Bitcoin is spreading across the world
             *
             * El Salvador
             *
             *
             *
             *
             *
             */}
            Bitcoin mining is a global phenomenon, with operations spread across
            major world powers and increasingly gaining popularity in smaller
            countries. For instance, Kazakhstan has witnessed a significant
            surge in Bitcoin mining, with its share rising from 1% in 2019 to
            14% in 2021. This decentralization of mining activity reflects the
            widespread adoption and interest in cryptocurrencies worldwide.
            Furthermore, the integration of cryptocurrencies into national
            economies is becoming a topic of consideration for some countries.
            In a landmark move in 2021, El Salvador became the first nation to
            officially adopt Bitcoin as its national currency, signaling a
            potential shift towards broader acceptance and utilization of
            cryptocurrencies in traditional economic systems
          </p>

          <div className="divider"></div>

          <h3 className="font-anta">Is Bitcoin Here to Stay?</h3>

          <div className="divider"></div>

          {/**
           *
           *
           * Assets Chart
           *
           *
           *
           */}

          <Image height={2000} width={2000} src={"/img/assets.png"} />

          <div className="divider"></div>

          <p className=" font-light leading-10 text-lg">
            {/**
             *
             *
             *
             * General Opinion
             *
             * Jamie Dimon
             *
             * Critics may say...
             *
             *
             *
             *
             */}
            Bitcoin is the 9th largest asset in the world, yet it's
            future remains uncertain despite its surging popularity and
            increasing investment inflows. While it continues to attract
            significant attention and investment, there are lingering doubts and
            concerns surrounding its long-term viability. Critics, including
            notable figures like Jamie Dimon, CEO of JP Morgan Chase, express
            skepticism about Bitcoin's sustainability and its acceptance by
            governments. Dimon publicly addressed his doubts about Bitcoin
            recently, “I will personally never buy Bitcoin, and I do think it’s
            a risk if you are a buyer” (CoinDesk).
          </p>

          <p className=" font-light leading-10 text-lg">
            Regulatory scrutiny, security vulnerabilities, and the potential for
            market manipulation are among the factors contributing to the
            uncertainty surrounding Bitcoin's future. As the landscape of
            cryptocurrencies evolves and regulatory frameworks develop, the fate
            of Bitcoin will depend on its ability to navigate these challenges
            and establish itself as a resilient and widely accepted asset class
            in the global financial ecosystem.
          </p>

          <div className="divider"></div>

          <div className="flex flex-row justify-between items-center">
            <h3 className="font-anta">Thank you for reading!</h3>

            <div className=" mt-6 ">
              <PiFinnTheHuman size={60} color="#f7931a" />
            </div>
          </div>       

          <div className="divider">
          </div> 

          <h3 className="font-anta">Sources and More</h3>

          <ul className="text-lg list-disc">
             <p> Data </p>
            <li>
            {"Price Chart: "} 
              <Link
              href={"https://finance.yahoo.com/quote/BTC-USD/history/"}
              >
              https://companiesmarketcap.com/assets-by-market-cap/
              </Link>
            </li>
            <li>
            {"Trends: "} 
              <Link
              href={"https://trends.google.com/trends/"}
              >
              https://companiesmarketcap.com/assets-by-market-cap/
              </Link>
            </li>
            <li>
            {"Mining: "} 
              <Link
              href={"https://www.kaggle.com/datasets/alekseyromanovich/evolution-of-country-share"}
              >
              https://companiesmarketcap.com/assets-by-market-cap/
              </Link>
            </li>
            <li>
            {"Largest Assets: "} 
              <Link
              href={"https://companiesmarketcap.com/assets-by-market-cap/"}
              >
              https://companiesmarketcap.com/assets-by-market-cap/
              </Link>
            </li>

              <p>Articles </p>

              <li>
                <Link
                href = {"https://www.coindesk.com/consensus-magazine/2023/05/22/celebrating-bitcoin-pizza-day-the-time-a-bitcoin-user-bought-2-pizzas-for-10000-btc/#:~:text=On%20May%2022%2C%202010%20Laszlo,as%20the%20medium%20of%20exchange"}
                >

                BTC Pizza
                
                </Link>
              </li>
              <li>
                <Link
                href = {"https://www.coindesk.com/markets/2024/03/12/jamie-dimon-defends-right-to-buy-bitcoin-even-though-he-never-will/#:~:text=%E2%80%9CI%20will%20personally%20never%20buy,activity%20like%20fraud%20and%20terrorism."}
                >

                Jamie Dimon
                
                </Link>
              </li>
          </ul>

          <p className="text-lg">

             I created my charts in RStudio and touched them up in Adobe Illustrator. This website is coded in React, Nextjs, Tailwindcss, and DaisyUI. 
          </p>



          </article>
      </div>
    </Layout>
  );
}
