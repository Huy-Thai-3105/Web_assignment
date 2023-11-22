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
import './AddNew.css'

const AddNew = () => {
    const { userid } = useParams()
    const { login } = React.useContext(UserContext)
    let navigate = useNavigate()

    React.useEffect(() => {
        if (!login || !userid) {
            navigate('/')
        }
    }, [login, navigate, userid])
    const editor = new EditorJS({
        holder: 'addPostEditorjs',
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
    })

    const handleAddNew = async (outputData) => {
        let data = JSON.stringify({
            user_id: userid, 
            version: outputData?.version,
            blocks: outputData?.blocks
        })
        const config = {
            method: 'post',
            url: 'http://localhost/php/ass_backend/Post/create',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        }
        const respone = await axios(config)
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
                handleAddNew(outputData)
            })
            .catch(error => {
                console.log("Saving error")
            })
    }

    return (
        <div className='content add-news'>
            <div id='addPostEditorjs'></div>
            <br/>
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

export default AddNew