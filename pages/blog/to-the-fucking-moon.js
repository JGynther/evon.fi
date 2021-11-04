import Link from "next/link"

import Arrow from "../../public/arrow.svg"

import Section from "@components/Section"
import PageWrapper from "@components/pageWrapper"
import Prose from "@components/prose"

export default function Article() {
    return (
        <PageWrapper>
            <Section>
                <Link href="/" passHref>
                    <button className="flex items-center text-indigo-500 hover:text-indigo-700 transition mt-5 text-lg tracking-wider">
                        <Arrow className="fill-current transform rotate-180"/>
                        Takaisin etusivulle
                    </button>
                </Link>
                <article>
                    <Prose large className="py-4">
                        Toimittaja Karo Hämäläisen <Link href="https://www.taloustaito.fi/Rahat/loysalle-rahalle-riittaa-ottajia--bongaa-pahimmat-varoitusmerkit/" passHref><a className="text-indigo-500">artikkeli</a></Link> Löysälle rahalle riittää ottajia – bongaa pahimmat
                        varoitusmerkit (Taloustaito, 3.11.2021) maalailee piruja seinille käyttäen esimerkkinä Evon Capitalia.
                        On hienoa, että toimintamme herättää kiinnostusta ja keskustelua, oli se sitten positiivista tai
                        negatiivista. Johtuen siitä, että yhtiötämme käytettiin artikkelin varoittavana esimerkkinä, koemme,
                        että on syytä avata laajemmin yhtiön toimintaa ja vastata yhtiötä koskeviin väitteisiin, sillä artikkeli
                        on yksinomaan kirjoitettu toimittajan näkökulmasta.
                    </Prose>
                    <Prose large className="py-4">
                        Haluamme ensiksi selventää yhtiön luonnetta. Mielestämme yhtiötä kuvaa Hämäläisen esittämistä
                        vaihtoehdoista parhaiten vaihtoehdot yksi (vitsi), kaksi (leikkiä) ja neljä (poikamainen unelma), kaikki
                        nämä yhdessä. Huijaukseksi tätä ei voi missään nimessä kutsua. Ainoa taho, jota tässä huijataan lienee
                        yhtiön johto, jolle ei toistaiseksi makseta mitään. Nyt eikä lähitulevaisuudessakaan. Teemme
                        toimintaamme pilke silmäkulmassa, mutta silti tosissaan.
                    </Prose>
                    <Prose large className="py-4">
                        Vaikka osakeantiin voi vapaasti osallistua, on anti suunnattu pääosin nykyisille omistajille ja
                        omistajien kaveripiirille, jotka haluavat mukaan. Me emme siis halua mukaan ihmisiä, jotka eivät
                        ymmärrä yhtiön konseptia ja siihen sijoittamiseen liittyviä riskejä. Evon Capital voisi hyvinkin olla
                        yhdistys, jossa kaveriporukka juo olutta ja keskustelee sijoittamisesta. Haluamme kuitenkin, että
                        meillä on myös yhteinen sijoitussalkku, jonka sijoituksista voimme yhdessä päättää.
                    </Prose>
                    <Prose large className="py-4">
                        Selvennyksenä: Evon Capital ei ole listautumassa pörssiin, paitsi ilmeisesti Karon pörssiin.
                        Harkitsemme asiaa uudestaan ehkä ensi viikolla, jos silloinkaan.
                    </Prose>
                    <Prose large className="py-4">
                        Siteeraten toimittaja Hämäläistä, moni yhtiön asioista kieltämättä toimii vielä tässä vaiheessa
                        kuvaannollisesti pyhällä hengellä. Tekoälyprojektin kulut ovat siihen nähden varsin kohtuulliset, että
                        työstä ei makseta kenellekään palkkaa, maksamme pelkästään minimaalisesta määrästä serveritilaa.
                        Kyseessä ei ainakaan tällä hetkellä ole kovinkaan massiivinen projekti, vaan suhteellisen
                        yksinkertainen systeemi, jota voi jatkojalostaa myöhemmin. Myönnämme tosin sen, että
                        tekoälyprojektimme kutsuminen tässä vaiheessa tekoälyksi loukkaa sekä sanaa teko että äly.
                        Teknologiajohtajamme Haverisen mukaan koodiprojektien kustannukset menee yleensä lähinnä
                        palkkaan eikä rautaan.
                    </Prose>
                    <Prose large className="py-4">
                        Meillä ei tosiaan ole varaa Exceliin, joten emme sitä käytä. Tässä on iso asiavirhe! Sen sijaan
                        käytämme Google Sheetsiä, joka on ilmainen. Sijoittamisen kuluihin on epäortodoksisesti laskettu
                        mukaan myös mahdolliset lainakulut. Arvioidusta noin kolmensadan euron sijoituskuluista on tänä
                        vuonna realisoitunut huomattavasti alle viisikymmentä euroa. Tämä on pääomaan nähden noin 0,2
                        prosenttia. Pyrimme kaikilta osin minimoimaan ei-pakollisia hallinnollisia kuluja ja muita kuluja,
                        jotka ovat pois itse sijoitustoiminnasta.   
                    </Prose>
                    <Prose large className="py-4">
                        Tuloslaskennan periaatteet on avattu osakeannin infopaketissa tarkemmin. Kulut on laskettu hieman
                        yläkanttiin ja tuotot keskimääräisen markkinatuoton mukaisina
                    </Prose>
                    <Prose large className="py-4">
                        Ehdoton tavoitteemme on tässä vaiheessa kasvattaa pääomaa. Tämän kokoisella salkulla on hankalaa
                        ottaa edes itseään tosissaan. Todennäköisesti toimittajan tähän juttuun käyttämä aika, puhumattakaan
                        lukijoiden ajasta tämän jutun parissa, on yritystä arvokkaampi. Kuten toimittaja ansiokkaasti toteaa,
                        tavoitteenamme on myydä osakkeita suunnilleen matemaattisella arvolla eikä nostaa keinotekoisesti
                        nykyisten osakkeiden arvoa.
                    </Prose>
                    <Prose large className="py-4">
                        Yhtiön menneisyyttä on syytä avata tarkemmin. Vuonna 2019 perustetun yhtiön tavoite oli alunperin
                        tuottaa päästölaskelmia etenkin ravintola- ja matkailualalle. Maailmanlaajuisen pandemian johdosta
                        2020 tämä kuitenkin epäonnistui, vaikka töitä tehtiin hiki hatussa. Alkuvuodesta 2021 “poikamainen
                        unelmamme” näki ensimmäisen päivänvalonsa, kun päätimme yhteistuumin muuttaa yhtiön suuntaa.
                    </Prose>
                    <Prose large className="py-4">
                        Logomme sikaria tupruttelevalle apinalle löytyy selitys eräästä anekdootista: joidenkin tutkimusten
                        mukaan jopa apinat saattavat voittaa suuret hedgerahastot sijoitustensa tuotoilla. Emme väitä
                        olevamme ammattilaisia, ainakaan vielä, mutta jos apina voi onnistua, niin myös mekin!
                    </Prose>
                    <Prose large className="py-4">
                        Yrityksellä on paljon kaikennäköisiä suunnitelmia, koska olemme nuorten sijoittajien yhteisö, jossa
                        ajatukset saavat vapaasti lentää. Asuntosijoittaminen on herännyt paljon kiinnostusta, ja ehkä
                        mahdollisesti kaukaisessa tulevaisuudessa pääoma siihen riittää, ehkä nopeammin kuin yksittäisellä
                        opiskelijalla yksinään. 
                    </Prose>
                    <Prose large className="py-4">
                        Koska kyseessä on lievästi eskaloitunut harrastus, ei ole tarkoituksenmukaista maksaa kenellekään
                        palkkaa toiminnasta. Pääoma on toistaiseksi niin pieni, ettei siihen edes yksinkertaisesti ole varaa.
                        Yhtiö ei edes maksa kulukorvauksia, ja kaiken lisäksi yhtiöjohto maksoi itse jopa omat
                        käyntikorttinsa. Yhtiöjohdon ansaintalogiikasta ei ole meilläkään vielä minkäänlaisia ideoita. Tällä
                        hetkellä yhtiön puuhamiehet ja -naiset keskittyvät yhtiön pyörittämiseen vapaa-ajallaan, jahka
                        yliopisto-opiskeluiltaan ja töiltään ehtivät.
                    </Prose>
                    <Prose large className="py-4">
                        Vertaus Investoriin oli mairitteleva, jopa kunnianosoitus. Katsotaan tätä aspektia sitten parikymmentä
                        miljardia kruunua ja jokunen tuhat uutisjuttua myöhemmin. Meidän ensisijaisena tavoitteena ei ole
                        olla turvallinen, helppo tai Suomen tuottavin sijoitus. Ensisijainen tavoitteemme on olla Suomen
                        eeppisin sijoitusyhtiö eli pitää hauskaa porukalla, lisätä tietoisuutta kansankapitalismista ja
                        luonnollisesti tehdä samalla tuottoa.
                    </Prose>
                    <Prose large className="py-4">
                        “Evon Groupin eli Evon Capitalin eli Tree2u:n osakeanti on helppo kiertää kaukaa [– –]”. Kyllä, jos
                        toimittajat eivät meistä näin aktiivisesti kirjoittaisi. Verkkosivuillamme onkin jo tervetulotoivotus
                        Taloustaidon tunnollisille lukijoille.
                    </Prose>
                    <br />
                    <Prose large italic className="py-4">Evon Capitalin hallitus ja johtoryhmä</Prose>
                    <Prose large className="py-4">Lisätietoa:</Prose>
                    <Prose large className="">Toimitusjohtaja Aatu Pulkkinen, 045 278 3733, aatu.pulkkinen@evon.fi</Prose>
                    <p>Hallituksen puheenjohtaja Joona Gynther, 050 323 6750, joona.gynther@evon.fi</p>
                </article>
            </Section>
        </PageWrapper>
    )
}