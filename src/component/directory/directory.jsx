import React from "react";
import './directory_s.scss'
import MenuItem from "../menuitem/menuitem";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) =>(
    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionprops }) =>
            <MenuItem key={id} {...otherSectionprops}
            />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})


export default connect(mapStateToProps)(Directory)