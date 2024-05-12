const { ReportBase } = require( 'istanbul-lib-report' )

module.exports = class CustomReporter extends ReportBase
{

    constructor( opts )
    {
        super()

        // Options passed from configuration are available here
        this.file = opts.file
    }

    onStart( root, context )
    {
        const processFolder = ceRoot =>
        {
debugger;
            const path = ceRoot.path.v.join('/') + '/';
            const min = Math.min( ceRoot.c_full.lines.pct
                                , ceRoot.c_full.statements.pct
                                , ceRoot.c_full.functions.pct
                                , ceRoot.c_full.branches.pct );
            this.contentWriter = context.writer.writeFile( path+ (this.file ?? 'coverage.svg') );
            this.contentWriter.println( `<svg viewBox="0 0 140 32" height="20px" xmlns="http://www.w3.org/2000/svg">
    <style>
        .heavy { font: bold 16px sans-serif; fill:white; }
        .percent { font: bold 16px monotype; fill: white; }
    </style>
    <rect width="140" height="32" fill="#473" rx="4"/>
    <rect width="88" height="32" fill="#534" rx="4"/>
    <text x="8" y="21" class="heavy">coverage</text>
    <text x="94" y="22" class="percent">${ min }%</text>
</svg>`     );
            this.contentWriter.close();
            ceRoot.children.forEach(processFolder);
        };

        root.children.forEach(processFolder)
    }

    onEnd()
    {
    }
}