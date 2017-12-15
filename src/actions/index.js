import React from 'react';
export const save_comment='savecomment';

export function savecomment (comment) {


    return{
        type:save_comment,
        payload:comment


    }



}
