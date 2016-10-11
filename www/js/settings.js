var settings = {
    maxLines:       20, // maximal number of the lines
    button_arrange_bools: {enabled: true}, // if button arrange bool is visible
    line: {
        number:         {enabled: true,  name: ''},
        instance:       {enabled: true,  name: 'Instance'},
        id:             {enabled: true,  name: 'ID',            width: '200px', style: 'padding-left: 4px', _class: 'ids', inputStyle: ''},
        idSelect:       {enabled: true,  name: '',                              style: 'padding-left: 4px'},
        aggregate:      {enabled: true,  name: 'Aggregation',   width: '70px',  style: 'padding-left: 5px',     values: ['minmax', 'average', 'min', 'max', 'total', 'onchange']},
        chartType:      {enabled: true,  name: 'Chart Type',    width: '90px',                                  values: ['line', 'area', 'bar', 'lineplot', 'scatterplot', 'steps', /*'pie',*/ 'spline']},
        color:          {enabled: true,  name: 'Color',         width: '120px', style: 'padding-left: 5px', _class: 'input-color'},
        min:            {enabled: true,  name: 'Min',           width: '50px',  style: 'padding-left: 5px'},
        max:            {enabled: true,  name: 'Max',           width: '50px',  style: 'padding-left: 5px'},
        unit:           {enabled: true,  name: 'Unit',          width: '70px',  style: 'padding-left: 5px'},
        yaxe:           {enabled: true,  name: 'Y Axis',        width: '140px', style: 'padding-left: 5px',     values: ['', 'off', 'left', 'right', 'leftColor', 'rightColor'], defaultValueName: 'default'},
        xaxe:           {enabled: true,  name: 'X Axis',        width: '140px', style: 'padding-left: 5px',     values: ['', 'off', 'top', 'bottom', 'topColor', 'bottomColor'], defaultValueName: 'default'},
        name:           {enabled: true,  name: 'Name',          width: '200px', style: 'padding-left: 5px'},
        extraOptions:   {enabled: true,  name: 'More',          width: '90px',  style: 'text-align: center'},
        removeButton:   {enabled: true,  name: '',              width: '',      style: 'padding-left: 5px'}
    },
    extraOptions: {
        offset:         {enabled: true,  name: 'Offset',        width: '70px',  style: '', type: 'number'}, // support of time offset
        yOffset:        {enabled: true,  name: 'Y-Offset',      width: '70px',  style: '', type: 'number'}, // support of Y offset
        xticks:         {enabled: true,  name: 'X-Axis ticks',  width: '70px',  style: '', type: 'number'},
        yticks:         {enabled: true,  name: 'Y-Axis ticks',  width: '70px',  style: '', type: 'number'},
        thickness:      {enabled: true,  name: '&#216L',        width: '70px',  style: '', type: 'number', title: 'Line Width',    default: 1},
        shadowsize:     {enabled: true,  name: '&#216S',        width: '70px',  style: '', type: 'number', title: 'Shadow Size',   default: 0},
        commonYAxis:    {enabled: true,  name: 'Common Y Axis', width: '',      style: '', values: ['', '1', '2', '3', '4', '5'],  default: '',      names: ['default']},
        ignoreNull:     {enabled: true,  name: 'NULL as',       width: '',      style: '', values: ['false', 'true', '0'],         default: 'false', names: ['default', 'ignore null values', 'use 0 instead of null values']},
        smoothing:      {enabled: false, name: 'Smoothing',     width: '70px',  style: '', type: 'number'},
        afterComma:     {enabled: true,  name: 'After comma',   width: '70px',  style: '', type: 'number',  default: 2}
    },
    chapter_time:       {enabled: true},
    time_timeType:      {enabled: true},
    time_relativeEnd:   {enabled: true},
    time_range:         {enabled: true},
    time_live:          {enabled: true},
    time_start:         {enabled: true},
    time_end:           {enabled: true},
    time_aggregateType: {enabled: true},
    time_aggregateSpan: {enabled: true},

    chapter_options:    {enabled: true},
    options_width:      {enabled: true},
    options_height:     {enabled: true},
    options_noborder:   {enabled: true},
    options_window_bg:  {enabled: true},
    options_bg_custom:  {enabled: true},
    options_bg:         {enabled: true},
    options_x_labels_color: {enabled: true},
    options_y_labels_color: {enabled: true},
    options_title:      {enabled: true},
    options_titlePos:   {enabled: true},
    options_titleColor: {enabled: true},
    options_titleSize:  {enabled: true},
    options_legend:     {enabled: true},
    options_legColumns: {enabled: true},
    options_legBg:      {enabled: true},
    options_legBgOpacity: {enabled: true},

    options_barColor:   {enabled: true},
    options_barLabels:  {enabled: true},
    options_barWidth:   {enabled: true},
    options_barFontSize:{enabled: true},
    options_barFontColor:{enabled: true},

    options_smoothing:  {enabled: false},
    options_afterComma: {enabled: false},
    options_useComma:   {enabled: true},
    options_zoom:       {enabled: true},
    options_noedit:     {enabled: true},
    options_animation:  {enabled: true},
    options_border_color: {enabled: true},
    options_grid_color: {enabled: true},
    options_border_width: {enabled: true},

    option_markline:    {enabled: true}  // it is extra option and not options
};