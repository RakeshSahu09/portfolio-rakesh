import React from 'react';

export const projects = [
    {
        title: "BI 360 – Enterprise-Level Business Intelligence Solution",
        desc: "Built a comprehensive, multi-department Business Intelligence dashboard using Power BI to provide a 360-degree view of organizational performance.",
        tools: ["Power BI", "SQL", "DAX", "Power Query", "Data Modeling"],
        highlights: [
            "Revenue growth is strong year-over-year",
            "Profitability is declining due to high operational costs",
            "Marketing spend is increasing but ROI optimization required",
            "Sales heavily concentrated in select regions",
            "Supply chain forecast accuracy is good but inventory risk persists"
        ],
        accent: "var(--color-electric-blue)",
        github: "https://github.com/RakeshSahu09/BI360-PowerBi/",
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text-main)' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', color: 'var(--color-electric-blue)', marginBottom: '1rem' }}>📊 BI 360 – Enterprise-Level Business Intelligence Solution</h2>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>🚀 Project Overview</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                        BI 360 is a comprehensive, multi-department Business Intelligence dashboard built using Power BI to provide a 360-degree view of organizational performance.
                        <br /><br />
                        The solution integrates insights across:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                        {['🏢 Executive Management', '💰 Finance', '📢 Marketing', '🛍 Sales', '🚚 Supply Chain'].map((dept, i) => (
                            <li key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>{dept}</li>
                        ))}
                    </ul>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginTop: '1.5rem' }}>
                        The goal was to centralize business reporting and enable leadership to make data-driven decisions using interactive, real-time analytics.
                    </p>
                </div>

                <img src="/Executive view.png" alt="Executive Overview" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--card-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', marginTop: '2rem' }} />
                <div style={{ background: 'rgba(0, 210, 255, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(0, 210, 255, 0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-electric-blue)', marginBottom: '1.5rem' }}>🏢 1️⃣ Executive View – Strategic Performance Overview</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                        The Executive Dashboard provides a high-level summary of overall company performance across multiple years.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Key KPIs Displayed</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>• Net Sales (NS) – ₹ 3,736.17M (2022 Est)</li>
                                <li>• Net Profit (NP) – -₹ 522.42M</li>
                                <li>• Gross Margin (GM) – ₹ 1,422.88M</li>
                                <li>• Benchmark comparison vs Last Year</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Strategic Insights</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>• Strong revenue growth trend from 2018 to 2022</li>
                                <li>• Declining net profit despite revenue growth</li>
                                <li>• Stable gross margin % around ~37–40%</li>
                                <li>• Market share trend (Atliq MS %) tracked annually</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Analytical Features</h4>
                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                            {["Year filters", "Quarterly slicers", "Market, Region, Customer filters", "Top 5 Customers & Products", "Division & Channel breakdown"].map(f => (
                                <span key={f} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem' }}>{f}</span>
                            ))}
                        </div>
                    </div>
                    <strong style={{ color: '#00ffcc' }}>📌 Business Impact:</strong> <span style={{ color: 'var(--color-text-muted)' }}>Enabled leadership to identify revenue growth patterns while highlighting profitability concerns requiring cost optimization strategies.</span>
                </div>

                <img src="/Finance View.png" alt="Finance View" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--card-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', marginTop: '2rem' }} />
                <div style={{ background: 'rgba(142, 45, 226, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(142, 45, 226, 0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-neon-violet)', marginBottom: '1.5rem' }}>💰 2️⃣ Finance View – Profitability & Cost Structure Analysis</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                        The Finance Dashboard provides detailed P&L analysis with year-over-year comparisons.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Detailed Line Item Analysis</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Gross Sales, Pre & Post Invoice Deductions, Net Sales, COGS, Manufacturing Cost, Freight Cost, Operational Expenses, Net Profit %</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Key Financial Observations (2021)</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>• Net Sales: ₹ 823.85M</li>
                                <li>• Gross Margin: ₹ 300.63M</li>
                                <li style={{ color: '#ff4d4d' }}>• Net Profit: -₹ 54.65M</li>
                                <li>• Operational Expenses significantly impacting bottom line</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Region & Segment Profitability</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                            <li>• APAC leading in revenue</li>
                            <li>• NA contributing high sales but lower net profit %</li>
                            <li>• Notebook & Accessories driving revenue</li>
                            <li>• Some segments operating at negative profitability</li>
                        </ul>
                    </div>
                    <strong style={{ color: '#ff4d4d' }}>📌 Business Insight:</strong> <span style={{ color: 'var(--color-text-muted)' }}>The company is revenue-positive but profit-negative due to high operational and cost overheads. Clear indication for cost restructuring.</span>
                </div>

                <img src="/Marketing View.png" alt="Marketing View" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--card-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', marginTop: '2rem' }} />
                <div style={{ background: 'rgba(0, 210, 255, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(0, 210, 255, 0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-electric-blue)', marginBottom: '1.5rem' }}>📢 3️⃣ Marketing View – Promotions & Segment Performance</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                        The Marketing Dashboard analyzes promotional impact and product segment contribution.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Ads & Promotions (2021)</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>• ₹ 181.27M spent<br />• 284% increase vs last year</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Segment-Level Performance</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>• Accessories and Notebook driving majority of revenue</li>
                                <li>• Negative net profit across most segments</li>
                                <li>• Gross Margin % consistent around ~36%</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Division-Level Scatter Analysis</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                            <li>• Net Sales vs Gross Margin % comparison</li>
                            <li>• Identified high-revenue but low-margin segments</li>
                            <li>• Peripherals showing balanced performance</li>
                        </ul>
                    </div>
                    <strong style={{ color: '#ffcc00' }}>📌 Business Insight:</strong> <span style={{ color: 'var(--color-text-muted)' }}>Marketing investment is high, but profitability impact is limited. Indicates need for ROI-based campaign optimization.</span>
                </div>

                <img src="/Sales View.png" alt="Sales View" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--card-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', marginTop: '2rem' }} />
                <div style={{ background: 'rgba(142, 45, 226, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(142, 45, 226, 0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-neon-violet)', marginBottom: '1.5rem' }}>🛍 4️⃣ Sales View – Regional & Customer Performance</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                        The Sales Dashboard focuses on geographic and customer-level performance.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Regional Sales Insights</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>• India highest revenue contributor (~₹ 200M+)</li>
                                <li>• USA strong sales but moderate margins</li>
                                <li>• Europe showing high margin % but moderate revenue</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Customer-Level Analysis</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>• Amazon major revenue driver</li>
                                <li>• Atliq Exclusive strong gross margin %</li>
                                <li>• Multiple mid-tier customers contributing diversified revenue</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Product-Level Performance</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                            <li>• Notebook highest contributor</li>
                            <li>• Accessories second highest</li>
                            <li>• Storage & Networking smaller share but stable margins</li>
                        </ul>
                    </div>
                    <strong style={{ color: '#00ffcc' }}>📌 Business Insight:</strong> <span style={{ color: 'var(--color-text-muted)' }}>Revenue heavily dependent on select regions and customers. Opportunity exists to diversify high-margin geographies.</span>
                </div>

                <img src="/Supply Chain View.png" alt="Supply Chain View" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--card-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', marginTop: '2rem' }} />
                <div style={{ background: 'rgba(0, 210, 255, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(0, 210, 255, 0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-electric-blue)', marginBottom: '1.5rem' }}>🚚 5️⃣ Supply Chain View – Forecast Accuracy & Risk</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                        The Supply Chain Dashboard evaluates forecasting efficiency and operational risk.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Forecast Accuracy (2022)</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li style={{ color: '#00ffcc' }}>• 81% Accuracy</li>
                                <li>• Net Error: -9.48%</li>
                                <li style={{ color: '#ff4d4d' }}>• ABS Error: 19%</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Regional Forecast Analysis</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>• APAC & EU high forecast accuracy (~76–77%)</li>
                                <li>• LATAM comparatively lower accuracy (~64%)</li>
                                <li>• Overall risk categorized as OOS (Out of Stock) or EI (Excess Inventory)</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>🔹 Customer-Level Risk Monitoring</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                            <li>• Several key customers flagged OOS</li>
                            <li>• Forecast vs Sales Quantity comparison</li>
                            <li>• Real-time error tracking</li>
                        </ul>
                    </div>
                    <strong style={{ color: '#ffcc00' }}>📌 Business Insight:</strong> <span style={{ color: 'var(--color-text-muted)' }}>Supply chain forecasting is relatively strong but inventory imbalance (OOS risk) impacts operational efficiency and customer satisfaction.</span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.2)', marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem' }}>🧠 Integrated Business Findings</h3>
                    <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                        After analyzing all 5 dashboards collectively:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>
                        <li>1️⃣ Revenue growth is strong year-over-year</li>
                        <li>2️⃣ Profitability is declining due to high operational costs</li>
                        <li>3️⃣ Marketing spend is increasing but ROI optimization required</li>
                        <li>4️⃣ Sales heavily concentrated in select regions</li>
                        <li>5️⃣ Supply chain forecast accuracy is good but inventory risk persists</li>
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>🛠 Technical Implementation</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['✔ Star Schema Data Modeling', '✔ Power Query ETL', '✔ Advanced DAX Measures', '✔ KPI Benchmarking', '✔ Time Intelligence Functions', '✔ Multi-page Navigation'].map((item, i) => (
                            <span key={i} style={{ padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid var(--card-border)' }}>{item}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>💡 What This Project Demonstrates</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', color: 'var(--color-text-muted)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <li>✨ Enterprise-level dashboard design capability</li>
                        <li>✨ Cross-functional business understanding</li>
                        <li>✨ Financial statement interpretation skills</li>
                        <li>✨ Strong DAX & modeling proficiency</li>
                        <li>✨ Data-driven strategic thinking</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Retail Sales SQL Analytics",
        desc: "Analyzed 500-store retail network using SQL to uncover revenue patterns, operational inefficiencies, and category performance insights.",
        tools: ["SQL", "PostgreSQL", "Data Cleaning", "EDA"],
        highlights: [
            "500 stores analyzed across 4 regions — 65.6% of stores drive 80% of revenue (healthy distribution, not Pareto)",
            "Identified operational failure chain: High Delivery Time → Low Ratings → High Cancellations",
            "Grocery leads revenue (₹3.75 Cr); Fruits & Vegetables carries highest discount burden (9.23%) due to perishability"
        ],
        accent: "#00ffcc",
        github: "https://github.com/RakeshSahu09/retail-sales-sql-analytics",
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--color-text-main)' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', color: '#00ffcc', marginBottom: '1rem' }}>🛒 Quick Commerce Retail Analytics — End-to-End SQL Project</h2>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>🚀 Project Summary</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-muted)' }}>
                        <li>• End-to-end SQL analytics case study built on a quick-commerce retail dataset with 166,000+ transactions across 500 stores</li>
                        <li>• Built entirely in PostgreSQL, covering the full analytical workflow: data ingestion → cleaning → validation → business analysis</li>
                        <li>• Structured around four core business questions that mirror what a real retail operations team would care about</li>
                        <li>• Delivers insights on revenue drivers, operational inefficiencies, and category-level profitability</li>
                    </ul>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>📂 The Dataset</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: '#00ffcc', marginBottom: '0.8rem' }}>🔹 dim_store — 500 rows</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Store Dimension Table capturing store name, city, region, store type, area (sq ft), and opening date.</p>
                        </div>
                        <div>
                            <h4 style={{ color: '#00ffcc', marginBottom: '0.8rem' }}>🔹 fact_sales — 166,640 rows</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Transactional Fact Table capturing gross sales, discount amount, tax, net sales, delivery time, customer ratings, order status, payment mode, category, and brand.</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '1.5rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                        * Star schema structure — fact table joined to a dimension table — reflects a common real-world data warehouse pattern.
                    </p>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#00ffcc', marginBottom: '1.5rem' }}>🧹 Phase 1 — Data Cleaning & Preparation</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'rgba(0, 255, 204, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #00ffcc' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Type Conversion</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                                All columns were originally imported as TEXT — a common issue when loading CSVs without explicit schema definitions. Used <code style={{ color: '#00ffcc' }}>ALTER TABLE ... ALTER COLUMN ... TYPE ... USING CAST</code> to fix every column.
                            </p>
                        </div>
                        <div style={{ background: 'rgba(0, 255, 204, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #00ffcc' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Payment Mode Standardization</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                                Discovered the same payment method stored inconsistently: Wallet, wallet, wallet__, WALLET all existed in the data. Fixed using <code style={{ color: '#00ffcc' }}>TRIM(BOTH '_' FROM LOWER(payment_mode))</code> to normalize all values before grouping.
                            </p>
                        </div>
                        <div style={{ background: 'rgba(0, 255, 204, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #00ffcc' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>NULL Handling</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                                `date` column contained NULLs — filtered with <code style={{ color: '#00ffcc' }}>WHERE date IS NOT NULL</code> in all analytical queries instead of dropping rows. `customer_id` and `product_id` were entirely NULL across all 166,000 rows — ruled out customer-level and product-level analysis; flagged transparently as a data limitation.
                            </p>
                        </div>
                        <div style={{ background: 'rgba(0, 255, 204, 0.05)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #00ffcc' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Formula Validation</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                                Independently recalculated <code style={{ color: '#00ffcc' }}>net_sales</code> as <code style={{ color: '#00ffcc' }}>gross_sales - discount_amount + tax_amount</code> and compared against stored values to confirm data integrity before any revenue analysis.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#00ffcc', marginBottom: '1.5rem' }}>📈 Phase 2 — Revenue & Sales Performance</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <li>
                            <strong style={{ color: '#fff' }}>Regional Revenue Analysis:</strong> West region leads in total revenue — but the key insight came from computing `revenue_per_store` alongside totals. West's dominance is explained by store count, not individual store efficiency. South and North regions show more competitive per-store revenue.
                        </li>
                        <li>
                            <strong style={{ color: '#fff' }}>Monthly & Year-wise Trends:</strong> Grouped using <code style={{ color: '#00ffcc' }}>TO_CHAR(date, 'MM')</code> and `TO_CHAR(date, 'YYYY')`. Apparent dip in July, August, September was identified and flagged as a data volume limitation — not a business downturn. This distinction separates rigorous analysis from misleading reporting.
                        </li>
                        <li>
                            <strong style={{ color: '#fff' }}>Store-level Rankings:</strong> Used <code style={{ color: '#00ffcc' }}>RANK() OVER(PARTITION BY region ORDER BY SUM(net_sales) DESC)</code> to rank every store within its region. Computed each store's % contribution to regional revenue. Mirrors how regional sales reports are built in production environments.
                        </li>
                        <li>
                            <strong style={{ color: '#fff' }}>Pareto Analysis (80/20 Rule):</strong> Built using a two-CTE structure. Finding: 65.6% of stores contribute to 80% of revenue — the network does NOT follow the classic Pareto rule. This actually signals a healthier, more distributed revenue base rather than dangerous concentration.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#00ffcc', marginBottom: '1.5rem' }}>⚙️ Phase 3 — Operational Efficiency Analysis</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>Overall Health Check</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>Measured avg delivery time (~93 min), fastest/slowest delivery, cancellation rate, return rate, and avg rating using conditional aggregation (<code style={{ color: '#00ffcc' }}>COUNT(CASE WHEN...)</code>).</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>Regional Breakdown</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>Applied metrics partitioned by region via JOIN. Values were near-identical across regions — a characteristic of synthetic data; documented transparently.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ color: '#fff', marginBottom: '0.8rem' }}>Cancellations by Payment</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>Wallet payments → highest cancellation rate (~6.1%). COD → lowest. Involves promotional credits making it easier to abandon orders.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '8px' }}>
                            <h4 style={{ color: '#ff4d4d', marginBottom: '0.8rem' }}>🚨 Chain of Failure Identified</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}><strong>High Delivery Time → Low Ratings → High Cancellations.</strong> Improving delivery time is the upstream lever that ripples into better ratings.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#00ffcc', marginBottom: '1.5rem' }}>🏷️ Phase 4 — Category & Brand Analysis</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <li>
                            <strong style={{ color: '#fff' }}>Category Performance Scorecard:</strong> Computed total orders, revenue, avg order value, avg discount %, avg rating, and cancellation rate per category in one query. <span style={{ color: '#00ffcc' }}>Grocery leads in total revenue</span> with relatively low discounting. Personal Care ranks 2nd.
                        </li>
                        <li>
                            <strong style={{ color: '#fff' }}>Discount Impact Analysis:</strong> Key metric introduced: <code style={{ color: '#00ffcc' }}>discount_to_sales_ratio = SUM(discount_amount) / SUM(gross_sales)</code>. Reveals how much gross revenue is eroded by discounts. <span style={{ color: '#ff4d4d' }}>Fruits & Vegetables</span> ranks 3rd in net revenue but carries the highest discount burden (~9.23% of gross sales) due to perishability pressures.
                        </li>
                        <li>
                            <strong style={{ color: '#fff' }}>Brand Leaderboard:</strong> Filtered only `Delivered` orders to avoid inflating revenue. Ranked top 10 brands by net revenue alongside avg order value and discount levels, ready to feed vendor negotiation logic.
                        </li>
                    </ul>
                </div>

                <div style={{ background: 'rgba(0, 255, 204, 0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(0, 255, 204, 0.2)' }}>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem' }}>🔑 Key Findings</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-main)', fontSize: '1.05rem' }}>
                        <li>1️⃣ <strong>West region</strong> leads in total revenue due to store volume, not store efficiency — per-store revenue is more evenly distributed across regions.</li>
                        <li>2️⃣ <strong>No classic Pareto rule</strong> — 65.6% of stores drive 80% of revenue, indicating a healthy distribution without dangerous concentration.</li>
                        <li>3️⃣ <strong style={{ color: '#ff4d4d' }}>Operational chain of failure:</strong> High Delivery Time → Low Ratings → High Cancellations.</li>
                        <li>4️⃣ <strong>Wallet payments</strong> have the highest cancellation rate (~6.1%) due to low payment commitment.</li>
                        <li>5️⃣ <strong>Grocery</strong> is the strongest category by both volume and discounting efficiency.</li>
                        <li>6️⃣ <strong>Fruits & Vegetables</strong> carries a disproportionate discount burden (~9.23%) driven by perishability pressures.</li>
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>🛠 SQL Concepts & Techniques Used</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['ALTER TABLE / CAST', 'Window Functions (RANK, SUM OVER)', 'CTEs / WITH Clauses', 'Conditional Aggregation (CASE WHEN)', 'INNER JOINs', 'Data Definition & Cleaning', 'Date Functions (TO_CHAR)'].map((item, i) => (
                            <span key={i} style={{ padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid var(--card-border)' }}>{item}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>💡 What This Project Demonstrates</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', color: 'var(--color-text-muted)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <li>✨ Treating data validation as a prerequisite</li>
                        <li>✨ Distinguishing data artifacts from real trends</li>
                        <li>✨ Framing SQL outputs around business questions</li>
                        <li>✨ Communicating with appropriate caveats</li>
                    </ul>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem 2rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: '#fff', fontWeight: 'bold' }}>Environment:</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>PostgreSQL, pgAdmin 4</span>
                </div>
            </div>
        )
    }
];
