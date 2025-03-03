import {CONTENT} from "~/lib/store";
import ImageContent from "~/components/ui/image";
import {PhotoIcon} from "~/components/svg";
import {ByteWithLocale} from "~/components/ui/format-byte";

const GridImage = (props: {
    content: CONTENT
}) => {

    const content = () => props.content;

    return (
        <>
            <ImageContent
                src={`http://localhost:4000/${content().src}`}
                alt={content()?.name}
                imgClass={"pointer-events-none aspect-[1/1] w-full object-cover group-hover:opacity-75 rounded-sm"}
                rootClass={'group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-blue-5 focus-within:ring-offset-2 focus-within:ring-offset-gray-1'}
                fallbackClass={'min-h-[155px] animate pulse h-full w-full'}
            >
                <PhotoIcon class={'w-full h-full text-gray-2'}/>
            </ImageContent>
            <div class="pointer-events-none mt-3 block truncate text-sm font-medium text-gray-11">{content().original}</div>
            <div class={'flex justify-between items-center text-accent'}>
                <span class={'text-xs py-1'}>{content().type}</span>
                <ByteWithLocale value={content().size}/>
            </div>
        </>
    )
}

export default GridImage;