import { css } from 'styled-system/css'

import { Component } from 'solid-js'
import { VENDOR } from '~/lib/store'
import { CallIcon, GlobeIcon, MapPin, RatingIcon, ChatIcon } from '~/components/svg'

type PROPS = VENDOR

const VendorCard: Component<PROPS> = (props) => {
    const vendor = () => props

    return (
        <div class="">
            <div class={css({ bgColor: 'white', shadow: 'shadow', rounded: 'rounded', overflow: 'hidden' })}>
                <div
                    class={css({
                        bgSize: 'cover',
                        bgPosition: 'center',
                        h: '16',
                        p: '4',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    })}
                    style="background-image: url(https://content.api.news/v3/images/bin/11990db1d540d5c13ea8ca3e01f2083c)"
                >
                    <button
                        class={css({
                            textTransform: 'uppercase',
                            letterSpacing: 'widest',
                            fontSize: 'sm',
                            lineHeight: 'sm',
                            pt: '1',
                            pb: '1',
                            pl: '1',
                            pr: '1',
                            rounded: 'full',
                            opacity: '0.75',
                            shadow: 'lg',
                        })}
                    >
                        <MapPin class={css({ p: '1' })} />
                    </button>
                </div>
                <div
                    class={css({
                        pl: '4',
                        pr: '4',
                        pb: '3',
                        pt: '4',
                        borderBottomWidth: '1px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    })}
                >
                    <div class={css({ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mr: '1', ml: '1' })}>
                        <RatingIcon class={'size-4 stroke-amber-10 fill-amber-4'} />
                        <RatingIcon class={'size-4 stroke-amber-10 fill-amber-4'} />
                    </div>
                    <div
                        class={css({
                            fontSize: 'xs',
                            lineHeight: 'xs',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            color: 'gray.600',
                            letterSpacing: 'wide',
                        })}
                    >
                        {vendor()?.genres?.[0]}{' '}
                    </div>
                </div>
                <div
                    class={css({
                        p: '4',
                        color: 'gray.700',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    })}
                >
                    <div class={css({ display: 'flex', flexDir: 'column' })}>
                        <p class={css({ fontSize: 'xl', lineHeight: 'none', color: 'gray.900', mt: '1', mb: '1' })}>
                            {vendor().title}
                        </p>
                        <p class={css({ fontSize: 'xs', lineHeight: 'xs', w: '56', mt: '2' })}>Locally operated for 50 years</p>
                        <p class={css({ fontSize: 'xs', lineHeight: 'xs', w: '56', mt: '2' })}>
                            123 La Jolla Ave., Los Angeles, CA
                        </p>
                    </div>
                </div>
                <div
                    class={css({
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: '4',
                        borderTopWidth: '1px',
                        color: 'gray.600',
                    })}
                >
                    <div class={css({ display: 'flex', alignItems: 'center', flexDir: 'column', mt: '1', mb: '1' })}>
                        <p class={css({ fontSize: 'xs', lineHeight: 'xs', w: 'full' })}>401-123-1234</p>
                        <p class={css({ fontSize: 'xs', lineHeight: 'xs', w: 'full' })}>Open - CLoses 11PM</p>
                    </div>

                    <div class={css({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mr: '4', ml: '4' })}>
                        <div class={css({ display: 'flex', alignItems: 'center', rounded: 'full', borderWidth: '1px', p: '1' })}>
                            <CallIcon class={css({ p: '1' })} />
                        </div>
                        <div class={css({ display: 'flex', alignItems: 'center', rounded: 'full', borderWidth: '1px', p: '1' })}>
                            <ChatIcon class={css({ p: '1' })} />
                        </div>
                        <div class={css({ display: 'flex', alignItems: 'center', rounded: 'full', borderWidth: '1px', p: '1' })}>
                            <GlobeIcon class={css({ p: '1' })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorCard
