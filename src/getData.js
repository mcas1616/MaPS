const getData = {
    getContent : (cityName) => {
        let content;
        switch(cityName)
        {
            case "Tab 1":
                content = "<h3>What’s a pensions dashboard?</h3><p>Pensions dashboard is a digital tool intended to revolutionise how people engage with their pensions throughout their lives. Pensions dashboard will insure people throughout the UK have easy access to key information about what pensions they have, who manages team and what they are worth.</p>";
                break;
            case "Tab 2":
                content = "<h3>What’s the pensions dashboards industry delivery group? </h3><p>As a result of the Department for work and pensions feasibility study and a consultation on pensions dashboard, MaPS has established the pensions dashboards industry delivery group (IDG) to lead the delivery of the initial phase of the pensions dashboard programme.This independent group is responsible for developing the required data standard technology and governance to enable pensions data to be made available via multiple dashboard delivered by the industry as well as one delivered by MaPS￼￼￼￼￼. The IDG is forming a steering group and working groups bringing together representatives from a range of sectors:</p><p>* Pensions</p><p>* Financial technology (fintech)</p><p>* Financial services</p><p>* Consumer groups</p><p>* Regulators, and</p><p>* Government￼</p>";
                break;
            case "Tab 3":
                content = "<h3>What’s the role of the steering group?</h3><p>This steering group will provide strategic direction across a range of topics to support the delivery of pensions dashboard. it will have a specific focus on building consensus amongst and are representing the industry and consumers who will be involved in an impacted by the implementation and rollout of pensions dashboard.Reporting into the MaPS pensions dashboard project subcommittee, the steering group will meet once a month initially from October 2019 and will oversee the activities of the IDG implementation executive.</p>";
                break;
            default: 
                content =  "Worng Parameter";
                break;
        }
        return content;
    }
}
window.module = window.module || {};
module.exports = getData;