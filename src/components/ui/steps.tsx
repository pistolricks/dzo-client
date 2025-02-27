import { Steps, useSteps } from '@ark-ui/solid/steps'
import { For } from 'solid-js'

const items = [
    { value: 'first', title: 'First', description: 'Contact Info' },
    { value: 'second', title: 'Second', description: 'Date & Time' },
    { value: 'third', title: 'Third', description: 'Select Rooms' },
]

export const BaseStep = () => {
    const steps = useSteps({ count: items.length })

    return (
        <>

                    <Steps.Root   orientation={'horizontal'}   class={'flex flex-col'} count={items.length}>
                        <Steps.List class={'flex justify-between items-center'}>
                            <For each={items}>
                                {(item, index) => (
                                    <Steps.Item index={index()}>
                                        <Steps.Trigger type={'button'}>
                                            <Steps.Indicator>{index() + 1}</Steps.Indicator>
                                            <span>{item.title}</span>
                                        </Steps.Trigger>
                                        <Steps.Separator />
                                    </Steps.Item>
                                )}
                            </For>
                        </Steps.List>

                        <For each={items}>
                            {(item, index) => (
                                <Steps.Content class={'min-h-52 rounded bg-white flex justify-center items-center'} index={index()}>
                                    {item.title} - {item.description}
                                </Steps.Content>
                            )}
                        </For>

                        <Steps.CompletedContent class={'min-h-52 flex justify-center items-center'}>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>


                        <div class={'flex justify-between items-center'}>
                            <button type={'button'} onClick={() => steps().resetStep()}>Reset</button>
                        <div class={'flex justify-end items-center'}>
                            <Steps.PrevTrigger type={'button'}>Back</Steps.PrevTrigger>
                            <Steps.NextTrigger type={'button'}>Next</Steps.NextTrigger>
                        </div>
                        </div>
                    </Steps.Root>
        </>
    )
}
