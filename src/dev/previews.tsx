import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {RecentEpisodeCard, RecentEpisodes} from "../pages/recent-episodes/recent-episodes";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/RecentEpisodes">
                <RecentEpisodes/>
            </ComponentPreview>
            <ComponentPreview path="/RecentEpisodeCard">
                <RecentEpisodeCard/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;