import React, { Component } from 'react';
import { render } from 'react-dom';
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './TextEditor.css';


export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onEditorStateChange = (editorState) => {
        // console.log(editorState.getCurrentContent().getPlainText())
        // this.props.setContent(editorState.getCurrentContent().getPlainText())
        this.props.setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        this.setState({
            editorState,
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            content: this.state.editorState.getCurrentContent().getPlainText()
        };
        // console.log(data, this.props);
        // this.props.setContent(data)

    }


    render() {
        const { editorState } = this.state;

        function uploadImageCallBack(file) {
            return new Promise(
                (resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'https://api.imgur.com/3/image');
                    xhr.setRequestHeader('Authorization', 'Client-ID 2533e08d67ce1c7');
                    const data = new FormData();
                    debugger
                    console.log(file);
                    data.append('image', file);
                    xhr.send(data);
                    xhr.addEventListener('load', () => {
                        const response = JSON.parse(xhr.responseText);
                        console.log(response)
                        resolve(response);
                    });
                    xhr.addEventListener('error', () => {
                        const error = JSON.parse(xhr.responseText);
                        console.log(error)
                        reject(error);
                    });
                }
            );
        }

        return <div className='editor'>
            <Editor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: false } },
                    // image: { inDropdown: true },
                }}
            />
        </div>
    }
}
