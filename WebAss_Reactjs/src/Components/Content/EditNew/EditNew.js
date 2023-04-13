import React from 'react'
import axios from 'axios'
import UserContext from '../../../Contexts/UserContext'
import { useNavigate, useParams } from 'react-router'
import swal from 'sweetalert'
import EditorJS from '@editorjs/editorjs'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import SimpleImage from '@editorjs/simple-image'
import Header from '@editorjs/header'
import useFetchData from '../../../Hooks/useFetchData'
import './EditNew.css'

const EditNew = () => {
    const { id } = useParams()
    const { login } = React.useContext(UserContext)
    const {data} = useFetchData(`http://localhost/php/ass_backend/Post/read/${id}`)
    const [postExist, setPostExist] = React.useState(false)
    const [editor, setEditor] = React.useState(null)
    let navigate = useNavigate()

    React.useEffect(() => {
        if (!login || !id) {
            navigate('/')
        }
    }, [])

    React.useEffect(() => {
        let date = new Date(data.time)
            const content = {
                time: date.getTime(),
                version: data.version,
                blocks: data.blocks
            }
            setEditor(new EditorJS({
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
                data: content
            }))
            setPostExist(true)
    }, [data])

    const handleUpdatePost = async (outputData, id) => {
        let data = JSON.stringify({ 
            post_id: id,
            version: outputData?.version,
            blocks: outputData?.blocks
        })
        const config = {
            method: 'post',
            url: `http://localhost/php/ass_backend/Post/update/${id}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        }
        const respone = await axios(config)
        console.log(respone.data)
        if (respone.data.message === 'success') {
            swal({
                title: "Congratulations",
                text: "A new post has been create",
                icon: "success",
            })
        }
        else {
            swal({
                title: "Error",
                text: "Something wrong happened",
                icon: "error",
            })
        }
    }

    const handleSubmitPost = () => {
        editor.save()
            .then(outputData => {
                handleUpdatePost(outputData, id)
            })
            .catch(error => {
                console.log("Saving error")
            })
    }

    return (
        <div className='content'>
            <div id='postEditorjs'></div>
            {!postExist && <p className='text-muted fs-4 d-flex justify-content-center pt-4'>No news founded</p>}
            <div className="d-flex justify-content-center">
                <button 
                    className="submit-post button__submit btn"
                    onClick={handleSubmitPost}
                >
                    Submit
                </button>   
            </div>
        </div>
    )
}

export default EditNew