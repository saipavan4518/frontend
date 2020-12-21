import React from "react";

export default class Toast extends React.Component{
    render(){
        return(
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="..." class="rounded mr-2" alt="..." />
                        <strong class="mr-auto">Error</strong>
                        <small>.</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        {this.props.message}
                    </div>
                </div>
        )
    }
}