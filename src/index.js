import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY  = 'AIzaSyDBnn13-cNPtPJT1yQ8OuV2kypfEbjy6qI';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import videoDetail from './components/video_detail';
import VideoDetail from './components/video_detail';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null};
            
            this.videoSearch('The Chainsmokers - Everybody Hates Me')
 
        
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos)=> 
        {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
                //In ES6 this is resolved as this.setState({videos: videos});
            });
        });
    }

    render()
    {
        const VideoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);
        return (
            <div>
                <SearchBar onSearchTermChanged ={VideoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList  
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
