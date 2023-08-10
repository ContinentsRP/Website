import Link from "next/link";
import {useAppSelector} from "@/util/redux/Hooks";
import {selectTranslations} from "@/features/i18n/TranslatorSlice";
import {getLocaleStringAsArgs} from "@/util/LocaleHelper";
import React, {useEffect, useState} from "react";
import SponsorAvatar from "@/components/sponsor/SponsorAvatar";
import Head from "next/head";

interface Donor {
    name: string,
    avatar: string,
}

export default function Sponsor() {
    const strings = useAppSelector(selectTranslations);

    // React states
    const [donors, setDonors] = useState<Donor[]>([]);

    // React effect
    useEffect(() => {
        fetch('https://opencollective.com/mohist/members/all.json')
            .then(res => res.json())
            .then(json => {
                const donors = json.map((donor: any) => {
                    return {
                        name: donor.name,
                        avatar: donor.image,
                    }
                });

                const uniqueDonors = donors.filter((donor: Donor, index: number, self: any) =>
                    index === self.findIndex((t: Donor) => (
                        t.name === donor.name
                    ))
                );

                setDonors(uniqueDonors);
            });
    }, []);

    return (
        <div className={`bg-white dark:bg-dark-25 flex flex-col`}>
            <Head>
                <title>{strings['sponsor.page.title']}</title>
                <meta name="title" content="MohistMC - Sponsor" />
                <meta name="description" content="Empower Minecraft's future at MohistMC. Support our community's growth for innovation. Contribute now!" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://new.mohistmc.com/sponsor" />
                <meta property="og:title" content="MohistMC - Sponsor" />
                <meta property="og:description" content="Empower Minecraft's future at MohistMC. Support our community's growth for innovation. Contribute now!" />
                <meta property="og:image" content="https://new.mohistmc.com/mohist_logo_transparent.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://new.mohistmc.com/sponsor" />
                <meta property="twitter:title" content="MohistMC - Sponsor" />
                <meta property="twitter:description" content="Empower Minecraft's future at MohistMC. Support our community's growth for innovation. Contribute now!" />
                <meta property="twitter:image" content="https://new.mohistmc.com/mohist_logo_transparent.png" />
            </Head>
            <section className="flex flex-col justify-center items-center pt-20 bg-white dark:bg-dark-25">
                <div className="pt-10 px-4 mx-auto max-w-screen-xl text-center">
                    <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">{getLocaleStringAsArgs(strings['sponsor.title'])[0]}
                         <span className="text-blue-600 dark:text-blue-500">{getLocaleStringAsArgs(strings['sponsor.title'])[1]}</span>
                        {getLocaleStringAsArgs(strings['sponsor.title'])[2]}</h1>
                    <p className="mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">{strings['sponsor.subtitle']}</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link href="https://opencollective.com/mohist"
                           className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            {strings['social.opencollective']}
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                <path
                                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                            </svg>
                        </Link>
                        <Link href="https://github.com/sponsors/MohistMC"
                           className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            {strings['social.ghsponsors']}
                        </Link>
                    </div>
                </div>
            </section>
            <div className="top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className={`h-20 w-full`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shadow fill-gray-100 dark:fill-dark-50"></path>
                </svg>
            </div>
            <section className={`dark:bg-dark-50 bg-gray-100 pb-20`}>
                <div className="pt-10 md:pb-0 pb-6 px-4 mx-auto max-w-screen-xl text-center">
                    <h2 className="text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">{getLocaleStringAsArgs(strings['sponsor.section.title'])[0]} <span className="text-blue-600 dark:text-blue-500">{getLocaleStringAsArgs(strings['sponsor.section.title'])[1]}</span>{getLocaleStringAsArgs(strings['sponsor.section.title'])[2]}</h2>
                    <p className="mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-100">{strings['sponsor.section.subtitle']}</p>
                </div>
                <div className={`flex flex-row gap-3 flex-wrap justify-center items-center`}>
                    {
                        donors.map(donor => <SponsorAvatar name={donor.name} avatar={donor.avatar} key={donor.name}/>)
                    }
                </div>
            </section>
        </div>
    )
}