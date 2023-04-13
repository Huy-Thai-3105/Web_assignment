import React, { version } from 'react'
import { useParams } from 'react-router'
import useFetchData from '../../../Hooks/useFetchData'
import EditorJS from '@editorjs/editorjs'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import SimpleImage from '@editorjs/simple-image'
import Header from '@editorjs/header'
import './NewDetail.css'

const NewDetail = () => {
    const { id } = useParams()
    const { data } = useFetchData(`http://localhost/php/ass_backend/Post/read/${id}`)
    const [postExist, setPostExist] = React.useState()

    React.useEffect(() => {
        if (data && data?.message) {
            setPostExist(false)
        }
        else if (data) {
            let date = new Date(data.time)
            const content = {
                time: date.getTime(),
                version: data.version,
                blocks: data.blocks
            }
            const editor = new EditorJS({
                holder: 'postEditorjs',
                tools: {
                    header: Header,
                    list: {
                        class: List,
                        inlineToolbar: true,
                        config: {
                            defaultStyle: 'unordered'
                        }
                    },
                    embed: Embed,
                    image: SimpleImage,
                },
                placeholder: 'Write you post here!',
                data: content,
                readOnly: true
            })
            setPostExist(true)
        }
    }, [data])

    return (
        <div className='content new-detail'>
            <div id='postEditorjs'></div>
            {!postExist && <p className='text-muted fs-4 d-flex justify-content-center pt-4'>No news founded</p>}
        </div>
    )
}

export default NewDetail